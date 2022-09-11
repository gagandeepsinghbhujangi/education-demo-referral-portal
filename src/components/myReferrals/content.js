import { Modal } from "antd";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import AddReferralForm from "../../components/addReferralForm";
import tableConfig from "../../config/component/tableConfig";
import CustomTable from "../customTable";
import { API_GET_LEADS_BY_ADVANCED_SEARCH } from "./../../api";
import CommonService from "../../services/CommonService";
import { MyRefferalCss } from "../../styles/Myreferral";
import SpinnerLoader from "../spinnerLoader";
import Button from "../button";
import "../../styles/globalStyles.css";
import LoaderContext from "../../context/LoaderContext";
import { getLeadIdFromCookie } from "../../authentication/utility";
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import Rewards from "../rewards";
const MyRefferalContent = ({ cardData, getAllCounts, config }) => {
  // props from config
  const {
    addBtnText,
    importBtnText,
    isReward,
    point,
    addIcon,
    importIcon,
    rewardIcon,
    dashboardTitle,
    dashboardButton,
  } = config;
  const [allLeads, setAllLeads] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const { topBarRef } = useContext(LoaderContext);
  const navigate = useNavigate();
  const [perPage, setPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(null);

  const handleBulkUpload = () => {
    navigate("/referrals");
  };

  const handleAddLead = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getAllLeads = (
    status = selectedStatus,
    startDate = selectedStartDate,
    endDate = selectedEndDate,
    pageSize = perPage,
    pageIndexNo = pageIndex
  ) => {
    topBarRef?.current?.continuousStart();
    setIsLoading(true);
    const leadId = getLeadIdFromCookie();
    if (!leadId) {
      window.location.href = "/";
      return;
    }

    let advancedSearchTextNewPayload = `{"GrpConOp":"And","Conditions":[{"Type":"Lead","ConOp":"or","RowCondition":[{"SubConOp":"And","LSO":"mx_Referral_Lead","LSO_Type":"String","Operator":"eq","RSO":"${leadId}","RSO_IsMailMerged":false},{"RSO":""},{"RSO":""}]}],"QueryTimeZone":"India Standard Time"}`;

    if (status) {
      advancedSearchTextNewPayload = `{"GrpConOp":"And","Conditions":[{"Type":"Lead","ConOp":"and","RowCondition":[{"SubConOp":"And","LSO":"mx_Referral_Lead","LSO_Type":"String","Operator":"eq","RSO":"${leadId}","RSO_IsMailMerged":false},{"RSO":""},{"RSO":""}]},{"Type":"Lead","ConOp":"and","RowCondition":[{"SubConOp":"And","LSO":"mx_Application_Stage","LSO_Type":"PickList","Operator":"eq","RSO":"${status}","RSO_IsMailMerged":false},{"RSO":""},{"RSO":""}]}],"QueryTimeZone":"India Standard Time"}`;
    }

    if (startDate && endDate) {
      advancedSearchTextNewPayload = `{"GrpConOp":"And","Conditions":[{"Type":"Lead","ConOp":"and","RowCondition":[{"SubConOp":"And","LSO":"mx_Referral_Lead","LSO_Type":"String","Operator":"eq","RSO":"${leadId}","RSO_IsMailMerged":false},{"RSO":""},{"RSO":""}]},{"Type":"Lead","ConOp":"or","RowCondition":[{"SubConOp":"And","LSO":"CreatedOn","LSO_Type":"DateTime","Operator":"between","RSO":"${moment(
        startDate
      ).format("YYYY-MM-DD")} TO ${moment(endDate).format(
        "YYYY-MM-DD"
      )}","RSO_IsMailMerged":false},{"RSO":""},{"RSO":""}]}],"QueryTimeZone":"India Standard Time"}`;
    }
    // Date Range --
    if (startDate && endDate && status) {
      advancedSearchTextNewPayload = `{
        "GrpConOp": "And",
        "Conditions": [
          {
            "Type": "Lead",
            "ConOp": "and",
            "RowCondition": [
              {
                "SubConOp": "And",
                "LSO": "mx_Referral_Lead",
                "LSO_Type": "String",
                "Operator": "eq",
                "RSO": "${leadId}",
                "RSO_IsMailMerged": false
              },
              {
                "RSO": ""
              },
              {
                "RSO": ""
              }
            ]
          },
          {
            "Type": "Lead",
            "ConOp": "or",
            "RowCondition": [
              {
                "SubConOp": "And",
                "LSO": "CreatedOn",
                "LSO_Type": "DateTime",
                "Operator": "between",
                "RSO": "${moment(startDate).format("YYYY-MM-DD")} TO ${moment(
        endDate
      ).format("YYYY-MM-DD")}",
                "RSO_IsMailMerged": false
              },
              {
                "RSO": ""
              },
              {
                "RSO": ""
              }
            ]
          },
          {
            "Type": "Lead",
            "ConOp": "and",
            "RowCondition": [
              {
                "SubConOp": "And",
                "LSO": "mx_Application_Stage",
                "LSO_Type": "PickList",
                "Operator": "eq",
                "RSO": "${status || ""}",
                "RSO_IsMailMerged": false
              },
              {
                "RSO": ""
              },
              {
                "RSO": ""
              }
            ]
          }
        ],
        "QueryTimeZone": "India Standard Time"
      }`;
    }
    const payload = {
      body: {
        SearchParameters: {
          SearchText: "",
          DefinitionType: "1",
          AdvancedSearchTextNew: advancedSearchTextNewPayload,
        },
        Columns: {
          Include_CSV:
            "FirstName, LastName, Mobile, EmailAddress, CreatedOn, mx_Interested_Course, mx_Application_Stage",
        },
        Sorting: {
          ColumnName: "CreatedOn",
          Direction: "1",
        },
        Paging: {
          PageIndex: pageIndexNo,
          PageSize: pageSize,
        },
      },
    };
    // get lead by advance search api call------
    API_GET_LEADS_BY_ADVANCED_SEARCH(payload)
      .then(async (response) => {
        const { Leads, RecordCount } = response?.data?.message;
        setTotalRecords(RecordCount);

        const leads = await CommonService.getParsedLeadData(RecordCount, Leads);
        setAllLeads(leads);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        topBarRef?.current?.complete();
      });
  };

  // useEffect(() => {
  //   getAllLeads();
  // }, []);

  const handleStatusChange = (event) => {
    if (event.key === "All Status") {
      setSelectedStatus("");
      getAllLeads("", selectedStartDate, selectedEndDate, 10, 1);
      setPageIndex(1);
      setPerPage(10);
    } else {
      setPageIndex(1);
      setPerPage(10);
      getAllLeads(event.key, selectedStartDate, selectedEndDate, 10, 1);
      setSelectedStatus(event.key);
    }
  };

  const handleCalendarChange = (startDate, endDate) => {
    if (startDate && endDate) {
      getAllLeads(selectedStatus, startDate, endDate);
      setSelectedStartDate(startDate);
      setSelectedEndDate(endDate);
    } else {
      setSelectedStartDate("");
      setSelectedEndDate("");
    }
  };

  useEffect(() => {
    if (selectedStartDate === "" && selectedEndDate === "") {
      getAllLeads(selectedStatus);
    }
  }, [selectedStartDate]);

  const handlePageSizeChange = (selectedSize) => {
    setPerPage(selectedSize);
    getAllLeads(
      selectedStatus,
      selectedStartDate,
      selectedEndDate,
      selectedSize
    );
  };

  const handlePageIndexChange = (pageIndexInput) => {
    setPageIndex(pageIndexInput);
    getAllLeads(
      selectedStatus,
      selectedStartDate,
      selectedEndDate,
      perPage,
      pageIndexInput
    );
  };

  const handleGoTONextPage = () => {
    const nextPageCount = pageIndex + 1;
    setPageIndex(nextPageCount);
    getAllLeads(
      selectedStatus,
      selectedStartDate,
      selectedEndDate,
      perPage,
      nextPageCount
    );
  };

  const handleGoTOPreviousPage = () => {
    const nextPageCount = pageIndex - 1;
    setPageIndex(nextPageCount);
    getAllLeads(
      selectedStatus,
      selectedStartDate,
      selectedEndDate,
      perPage,
      nextPageCount
    );
  };

  const handleClearFilter = () => {
    setSelectedStatus("");
    setSelectedStartDate("");
    setSelectedEndDate("");
    getAllLeads("", "", "");
  };

  const handleOnSuccess = () => {
    getAllCounts();
    getAllLeads("", "", "");
    handleCancel();
  };

  return (
    <>
      <MyRefferalCss />

      <div className='parentContentWrapper'>
        <div className='titleWrapper'>
          <div className='rewardWrapper flex-center ml-4'>
            <h2>{dashboardTitle}</h2>
            {/* To show/hide reward UI point */}
            {isReward && (
              <>
                <div className='vertical-line'></div>
                <Rewards pointLbl={point} rewardIcon={rewardIcon} />
              </>
            )}
          </div>
          <div className='buttonWrapper'>
            {/* To show and hide dashboard button */}
            {dashboardButton && (
              <>
                <Button
                  type='ButtonWithIcon'
                  label={addBtnText}
                  customClass='addLead'
                  handleClick={handleAddLead}
                  iconStyles={{ height: 18, width: 18 }}
                  customIcon={addIcon}
                />
                <Button
                  type='ButtonWithIcon'
                  label={importBtnText}
                  customClass='importLead'
                  handleClick={handleBulkUpload}
                  iconStyles={{ height: 18, width: 18 }}
                  customIcon={importIcon}
                />
              </>
            )}

            <Modal
              title='Add New Applicant'
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              className='addReferralFormWrapper'
              width={800}>
              {isModalVisible && (
                <AddReferralForm handleOnSuccess={handleOnSuccess} />
              )}
            </Modal>
          </div>
        </div>

        {isTabletOrMobile && (
          <div className='flex-left ml-4 mb-5'>
            {/* To show/hide reward UI point on mobile view */}
            {isReward && (
              <>
                <Rewards pointLbl={point} rewardIcon={rewardIcon} />
              </>
            )}
          </div>
        )}
        {/* To show/hide spinner loader */}
        {isLoading && <SpinnerLoader />}
        <>
          <div className='parentReferralWrapper'>
            <div className='boxes'>
              {cardData.map(
                ({ name, value, icon, textColor, boxColor, opacity }) => (
                  <div
                    className='gridStyle'
                    style={{ backgroundColor: boxColor }}>
                    <img
                      className='referralsIcon'
                      src={icon}
                      alt='No Data'
                      width={52}
                      height={52}
                    />
                    <div className='referral'>
                      <div
                        className='referralCount'
                        style={{ color: textColor }}>
                        {value}
                      </div>
                      <div
                        className='referralContent'
                        style={{ color: textColor }}>
                        {name}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <CustomTable
            config={tableConfig}
            tableRows={allLeads}
            totalRecords={totalRecords}
            handleStatusChange={handleStatusChange}
            selectedStatus={selectedStatus}
            handleCalendarChange={handleCalendarChange}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            perPage={perPage}
            handlePageSizeChange={handlePageSizeChange}
            handleClearFilter={handleClearFilter}
            handlePageIndexChange={handlePageIndexChange}
            handleGoTONextPage={handleGoTONextPage}
            handleGoTOPreviousPage={handleGoTOPreviousPage}
            pageIndex={pageIndex}
            isLoading={isLoading}
          />
        </>
        {/* Tablet & Mobile show --- */}
        {isTabletOrMobile && (
          <div className='boxWrapper'>
            <div className='buttonWrapper'>
              <Button
                type='ButtonWithIcon'
                label={addBtnText}
                customClass='addLead'
                handleClick={handleAddLead}
                iconStyles={{ height: 18, width: 18 }}
                customIcon={addIcon}
              />
              <Button
                type='ButtonWithIcon'
                label={importBtnText}
                customClass='importLead'
                handleClick={handleBulkUpload}
                iconStyles={{ height: 18, width: 18 }}
                customIcon={importIcon}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

MyRefferalContent.prototype = {
  addBtnText: PropTypes.string,
  importBtnText: PropTypes.string,
  handleAddLead: PropTypes.func,
  handleImportLead: PropTypes.func,
  addIcon: PropTypes.string,
  importIcon: PropTypes.string,
};

MyRefferalContent.defaultProps = {
  config: null,
  addBtnText: null,
  importBtnText: null,
  addIcon: null,
  importIcon: null,
  rewardIcon: null,
  isReward: null,
  point: null,
  dashboardTitle: null,
  dashboardButton: null,
};

export default MyRefferalContent;
