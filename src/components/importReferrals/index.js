import React, { useState } from "react";
import { ImportReferralsCss } from "./importReferralsCSS";
import { LeftOutlined } from "@ant-design/icons";
import ReferralsInstructions from "./ReferralsInstructions";
import ReferralsFileUpload from "./ReferralsFileUpload";
import { useNavigate } from "react-router-dom";
import importReferralsConfig from "../../config/component/importReferralsConfig";
import mainIcon from "../../assets/images/icons/awesome-file-import.svg";
import { Collapse } from "antd";
import Papa from "papaparse";
import { useMediaQuery } from "react-responsive";
import LeadTable from "./LeadTable";
import Header from "../header";
import CommonService from "../../services/CommonService";
import { API_CREATE_LEAD_WITH_BULK_UPLOAD } from "../../api";
import LoaderContext from "../../context/LoaderContext";
var async = require("async");

const { Panel } = Collapse;

const ImportReferrals = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [disableButton, setDisableButton] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [apiRecallCount, setApiRecallCount] = useState(0);
  const [isCollapse, setIsCollapse] = useState(1);
  const { topBarRef } = React.useContext(LoaderContext);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const navigate = useNavigate();

  const { injectExtraValues } = importReferralsConfig.uploadFile;

  const goBackHandler = (e) => {
    e.preventDefault();
    navigate("/myreferrals");
  };

  const handleUpload = (file) => {
    let tableRow;
    setTableData([]);
    Papa.parse(file, {
      complete: function (results) {
        tableRow =
          results && results.data && results.data.length > 0
            ? results.data
            : [];
        if (
          !(
            tableRow &&
            tableRow.length > 0 &&
            tableRow[tableRow.length - 1].length > 1
          )
        ) {
          tableRow.pop();
        }

        if (
          tableRow &&
          tableRow.length >= importReferralsConfig.uploadFile.maxRowsAllowed + 2
        ) {
          setError(
            `Maximum ${importReferralsConfig.uploadFile.maxRowsAllowed} rows are allowed.`
          );
          return;
        }
        if (
          tableRow &&
          tableRow.length >= 2 &&
          tableRow.length <= importReferralsConfig.uploadFile.maxRowsAllowed + 2
        ) {
          if (
            checkMandatoryFields(tableRow[0]) &&
            !checkIsCellFieldsEmpty(tableRow)
          ) {
            //bind data
            mapTableRow(tableRow);
          }
        } else {
          setError("No record(s) found in the file!");
        }
      },
    });
  };

  const mapTableRow = (tableRow) => {
    const tableRowHead = tableRow[0];
    const tableRowArr = tableRow.slice(1);

    const bulkLeadPayload = [];

    tableRowArr.map((row) => {
      const singleLeadRow = [];

      tableRowHead.map((head, index) => {
        const leadField = {
          Attribute: head,
          Value: row[index] || "-",
        };
        singleLeadRow.push(leadField);
      });

      if (injectExtraValues && injectExtraValues.length > 0) {
        injectExtraValues.map((field) => {
          const key = Object.keys(field)[0];
          const value = field[key];
          singleLeadRow.push({
            Attribute: key,
            Value: value,
          });
        });
      }

      importReferralsConfig.additionalColumnInCsv &&
        importReferralsConfig.additionalColumnInCsv.map((col) => {
          singleLeadRow.push(col);
        });

      bulkLeadPayload.push(singleLeadRow);
    });

    const splittedLeads = CommonService.splitArrayForBulkUpload(
      bulkLeadPayload,
      50
    );
    if (splittedLeads && splittedLeads.length > 0) {
      asyncParallel(splittedLeads);
    }
  };

  const checkMandatoryFields = (header) => {
    let foundMandatoryColumns = true;
    if (importReferralsConfig.mandatoryColumnNameInCsv.length > 0) {
      foundMandatoryColumns =
        importReferralsConfig.mandatoryColumnNameInCsv.every((columnName) => {
          return header.includes(columnName);
        });
    }
    if (!foundMandatoryColumns) {
      setError(
        "Incorrect/Missing mandatory columns. Please refer to the instructions for correct format."
      );
    }
    return foundMandatoryColumns;
  };

  const checkIsCellFieldsEmpty = (row) => {
    let isCellBlank = false;

    const tableRowHead = row[0];
    const tableRowArr = row.slice(1);

    const indexes = [];
    if (tableRowArr.length > 0) {
      tableRowHead.map((head, index) => {
        if (importReferralsConfig.noEmptyFieldInColumns.includes(head))
          indexes.push(index);
      });
    }
    if (indexes && indexes.length > 0) {
      tableRowArr.map((row, i) => {
        indexes.map((index) => {
          if (row[index] === "") {
            isCellBlank = true;
          }
        });
      });
    }
    if (isCellBlank) {
      setError("Uploaded CSV file contains empty field(s).");
    }
    return isCellBlank;
  };

  // asyncParallel function call Api parallel
  const asyncParallel = (splittedLeads) => {
    setIsLoading(true);
    topBarRef?.current?.continuousStart();
    async.parallel(
      splittedLeads.map((data, index) => {
        return (callBack) => {
          setTimeout(() => {
            createLead(data, callBack);
          }, 1000);
        };
      }),
      function async(err, results) {
        let finalArr = [];
        if (results && results.length > 0) {
          results.map((node) => {
            const { response, data } = node;

            if (
              response.data &&
              response.status === 200 &&
              response.data.statusCode === 200 &&
              response.data.message &&
              response.data.message.length > 0
            ) {
              response.data.message.map((leadRes, index) => {
                //Remove extra nodes form table
                data[index] = data[index].filter(
                  (a) => a.Attribute !== "mx_Referral_Lead"
                );
                data[index] = data[index].filter(
                  (a) => a.Attribute !== "mx_Application_Stage"
                );
                //End remove extra nodes form table
                if (leadRes.ErrorMessage) {
                  if (leadRes.ErrorMessage.includes("Duplicate")) {
                    data[index].status = "Duplicate";
                    data[index].push({
                      Attribute: "Status",
                      Value: "Duplicate",
                    });
                  } else if (leadRes.ErrorMessage.includes("Invalid data")) {
                    data[index].status = "InvalidData";
                    data[index].push({
                      Attribute: "Status",
                      Value: "InvalidData",
                    });
                  } else if (
                    leadRes.ErrorMessage.includes("Invalid Phone format")
                  ) {
                    data[index].status = "InvalidPhone";
                    data[index].push({
                      Attribute: "Status",
                      Value: "InvalidPhone",
                    });
                  }
                } else if (leadRes.LeadCreated) {
                  data[index].status = "Success";
                  data[index].push({ Attribute: "Status", Value: "Success" });
                }
                //remove unnecessary fields
                data[index].splice(5, 1);
                data[index].splice(1, 1);
                data[index].splice(4, 1);
              });
              setDisableButton(true);
              finalArr = [...finalArr, data];
            }
          });
        }
        finalArr = [].concat.apply([], finalArr);
        setTableData((prevArray) => [...prevArray, finalArr]);
        setIsLoading(false);
        topBarRef?.current?.complete();
      }
    );
  };

  // createLead is used for create 50 leads at one time
  const createLead = (data, callBack) => {
    const payload = { body: data };
    API_CREATE_LEAD_WITH_BULK_UPLOAD(payload)
      .then(function (response) {
        if (
          response.data.statusCode === 200 &&
          response.data.message &&
          response.data.message.length > 0
        ) {
          callBack(null, { response: response, data: data });
        } else if (
          response.data.statusCode === 200 &&
          response.data.message.ExceptionType ===
            "MXAPIRateLimitExceededException"
        ) {
          setTimeout(() => {
            createLead(data, callBack);
          }, 3000);
        }
      })
      .catch(function (error) {
        callBack(error, null, null);
      });
  };

  return (
    <div className='upload-file'>
      <ImportReferralsCss />
      <Header isSearchEnable={false} />
      <div className='container'>
        <div className='title-section'>
          <h1>
            <img src={mainIcon} alt='Main Icon' className='importIcon' />{" "}
            {importReferralsConfig.pageTitle}
          </h1>
          <a href='' className='hidden-mobile' onClick={goBackHandler}>
            <LeftOutlined /> {importReferralsConfig.backToPageLabel}
          </a>
        </div>
        <div className='upload-section'>
          <ReferralsFileUpload
            config={importReferralsConfig.uploadFile}
            handleUpload={handleUpload}
            error={error}
            setError={setError}
            file={file}
            setFile={setFile}
            setSuccess={setSuccess}
            success={success}
            isLoading={isLoading}
            setTableData={setTableData}
            disableButton={disableButton}
            setDisableButton={setDisableButton}
          />

          <ReferralsInstructions
            config={importReferralsConfig.instructions}
            instructionsConfig={importReferralsConfig.sampleFormat}
          />
        </div>
        {/* {!isTabletOrMobile && (
          <SampleFile
            config={importReferralsConfig.sampleFormat}
            isCollapse={isCollapse}
            setIsCollapse={setIsCollapse}
          />
        )} */}
        {tableData && tableData.length > 0 && (
          <LeadTable
            config={importReferralsConfig.tableConfig}
            tableData={tableData}
          />
        )}
      </div>
      <div className='hidden-desktop footermobile'>
        <button className='backbuttonmobile' onClick={goBackHandler}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ImportReferrals;
