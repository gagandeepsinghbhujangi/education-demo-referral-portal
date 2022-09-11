import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

// Images
import DefaultNoData from "../../assets/images/no-data.png";
import IconDownload from "./../../assets/images/icons/import.png";
import IconAdd from "../../assets/images/icons/add.png";
import rightArrow from "../../assets/images/open-arrow-left.svg";

// Layout
import SpinnerLoader from "../spinnerLoader";
import CustomTable from "../customTable";

import tableConfig from "../../config/component/tableConfig";
import { API_GET_LEADS_BY_ADVANCED_SEARCH } from "./../../api";
import CommonService from "../../services/CommonService";
import LoaderContext from "../../context/LoaderContext";
import { getLeadIdFromCookie } from "../../authentication/utility";

// Styles
import { DashboardSearchCss } from "../../styles/DashboardSearch";
import "../../styles/globalStyles.css";

const DashboardContent = ({ searchText, imgNoData }) => {
  const navigate = useNavigate();

  const [allLeads, setAllLeads] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { topBarRef } = useContext(LoaderContext);
  const [perPage, setPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const getAllLeads = (pageSize = perPage, pageIndexNo = pageIndex) => {
    topBarRef?.current?.continuousStart();
    setIsLoading(true);

    const leadId = getLeadIdFromCookie();
    if (!leadId) {
      window.location.href = "/";
      return;
    }

    const payload = {
      body: {
        SearchParameters: {
          SearchText: searchText,
          DefinitionType: "1",
          AdvancedSearchTextNew: `{"GrpConOp":"And","Conditions":[{"Type":"Lead","ConOp":"or","RowCondition":[{"SubConOp":"And","LSO":"mx_Referral_Lead","LSO_Type":"String","Operator":"eq","RSO":"${leadId}","RSO_IsMailMerged":false},{"RSO":""},{"RSO":""}]}],"QueryTimeZone":"India Standard Time"}`,
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
    // get lead api call for advance search-------
    API_GET_LEADS_BY_ADVANCED_SEARCH(payload)
      .then(async (response) => {
        const { Leads, RecordCount } = response?.data?.message;
        setTotalRecords(RecordCount);

        const leads = await CommonService.getParsedLeadData(RecordCount, Leads);
        // if (leads.length === 0) {
        //   navigate("/dashboard");
        // }

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

  useEffect(() => {
    getAllLeads();
  }, [searchText]);

  const handleBack = () => navigate("/myreferrals");

  const handlePageIndexChange = (pageIndexInput) => {
    setPageIndex(pageIndexInput);
    getAllLeads(perPage, pageIndexInput);
  };

  const handlePageSizeChange = (selectedSize) => {
    setPerPage(selectedSize);
    getAllLeads(selectedSize);
  };

  const handleGoTOPreviousPage = () => {
    const nextPageCount = pageIndex - 1;
    setPageIndex(nextPageCount);
    getAllLeads(perPage, nextPageCount);
  };

  const handleGoTONextPage = () => {
    const nextPageCount = pageIndex + 1;
    setPageIndex(nextPageCount);
    getAllLeads(perPage, nextPageCount);
  };

  return (
    <>
      <DashboardSearchCss />
      <div className='parentContentWrapper'>
        <div className='parentSearchWrapper'>
          {/* to show /hide back button on dashboard search page--- */}
          {!isLoading && (
            <h2>
              <div className='sign-msg cursor-pointer'>
                <img src={rightArrow} alt='arrow' onClick={handleBack} />
              </div>
              Back
            </h2>
          )}
        </div>
        {/* enable and disable spinner loader && check the length of leads----- */}
        {isLoading ? (
          <SpinnerLoader />
        ) : allLeads && allLeads.length > 0 ? (
          <CustomTable
            config={tableConfig}
            tableRows={allLeads}
            isTableHeader={false}
            isLoading={isLoading}
            perPage={perPage}
            totalRecords={totalRecords}
            handlePageSizeChange={handlePageSizeChange}
            handlePageIndexChange={handlePageIndexChange}
            handleGoTONextPage={handleGoTONextPage}
            handleGoTOPreviousPage={handleGoTOPreviousPage}
            pageIndex={pageIndex}
          />
        ) : (
          <div className='parentDashboardWrapper'>
            <img src={imgNoData} alt='No Data' />
            <p className='message'>
              No Results Found for <strong>‘{searchText}’</strong>!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

DashboardContent.prototype = {
  imgNoData: PropTypes.string,
  addBtnText: PropTypes.string,
  importBtnText: PropTypes.string,
  handleAddLead: PropTypes.func,
  handleImportLead: PropTypes.func,
  addIcon: PropTypes.string,
  description: PropTypes.string,
};

DashboardContent.defaultProps = {
  imgNoData: DefaultNoData,
  addBtnText: "Add New Applicant",
  importBtnText: "Import Applicants",
  addIcon: IconAdd,
  importIcon: IconDownload,
  description: "You have not added any leads yet!",
};

export default DashboardContent;
