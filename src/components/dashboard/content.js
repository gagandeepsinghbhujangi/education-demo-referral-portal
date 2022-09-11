import { useNavigate } from "react-router";
import { useState } from "react";
import { Modal } from "antd";

import PropTypes from "prop-types";
import Button from "../button";

import DefaultNoData from "../../assets/images/no-data.png";
import IconDownload from "./../../assets/images/icons/import.png";
import IconAdd from "../../assets/images/icons/add.png";

import leadSquare from "../../assets/images/icons/leadSquare.png";
import { DashboardCss } from "../../styles/Dashboard";
import AddReferralForm from "../../components/addReferralForm";

import "../../styles/globalStyles.css";

const DashboardContent = ({
  imgNoData,
  addBtnText,
  importBtnText,
  addIcon,
  importIcon,
  description,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

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

  const handleOnSuccess = () => {
    handleCancel();
    navigate("/myreferrals");
  };

  return (
    <>
      <DashboardCss />
      <div className="parentDashboardWrapper">
        <img src={imgNoData} alt="No Data" />
        <p className="message">{description}</p>
        <div className="boxWrapper">
          <div className="buttonWrapper">
            <Button
              type="ButtonWithIcon"
              label={addBtnText}
              customClass="addLead"
              handleClick={handleAddLead}
              iconStyles={{ height: 18, width: 18 }}
              customIcon={addIcon}
            />
            <Button
              type="ButtonWithIcon"
              label={importBtnText}
              customClass="importLead"
              handleClick={handleBulkUpload}
              iconStyles={{ height: 18, width: 18 }}
              customIcon={importIcon}
            />
            <Modal
              title="Add New Applicant"
              visible={isModalVisible} // to check for modal visible----
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              width={800}
            >
              <div className="modalForm">
                <AddReferralForm handleOnSuccess={handleOnSuccess} />
              </div>
            </Modal>
          </div>
        </div>
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
