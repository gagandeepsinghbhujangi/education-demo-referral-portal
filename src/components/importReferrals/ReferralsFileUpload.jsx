import { DeleteFilled, CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import cloudIcon from "../../assets/images/icons/awesome-cloud-upload-alt.svg";
import CommonService from "../../services/CommonService";

const ReferralsFileUpload = ({
  config,
  handleUpload,
  error,
  setError,
  file,
  setFile,
  success,
  setSuccess,
  isLoading,
  setTableData,
  disableButton,
  setDisableButton,
}) => {
  const { title, uploadButtonLabel, maxFileSizeAllowed } = config;

  const handleFileUpload = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setDisableButton(null);
    if (e.target && e.target.files) {
      const uploadedFile = e.target.files[0];
      const file_extension = uploadedFile.name.split(".").pop().toLowerCase();
      if (file_extension === "csv" || file_extension === "CSV") {
        if (uploadedFile.size / 1000 <= maxFileSizeAllowed) {
          setFile(uploadedFile);
        } else {
          setError(`Maximum file size allowed is ${maxFileSizeAllowed} KB.`);
        }
      } else {
        setError("Please upload valid file. Only CSV file allowed.");
        setFile(null);
      }
    }
    e.target.value = null;
  };

  const handleClear = () => {
    setFile(null);
    setError(null);
    setTableData([]);
    setDisableButton(null);
  };

  const handleUploadClick = () => {
    if (!file || (file && file.name.split(".") === "")) {
      setError("Please upload file.");
      setFile(null);
    } else {
      handleUpload(file);
      setError(null);
    }
  };

  const override = {
    display: "inline",
    margin: "0 auto",
    borderColor: "red",
    paddingLeft: "5px",
  };

  return (
    <div className="upload-box">
      <label>{title}</label>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          accept=".csv"
          onChange={handleFileUpload}
        />
        <label className="custom-file-label" htmlFor="customFile">
          <div>
            <img src={cloudIcon} alt="Browse file" />
          </div>
          Browse file
        </label>
      </div>

      {file && (
        <div className="uploaded-file">
          <div className="upload-file-name">
            {file.name}
            <span className="ml-2 upload-file-size">
              {CommonService.bytesToSize(file.size)}
            </span>
          </div>
          <div className="upload-file-size cursor-pointer">
            <span className="icon-close" onClick={handleClear}>
              <DeleteFilled />
            </span>
          </div>
        </div>
      )}

      {isLoading ? (
        <Button
          className={`btn-primary custom-file-button disabled`}
          onClick={handleUploadClick}
          disabled={isLoading || !file}
        >
          Importing CSV File <BeatLoader size="5" color="#fff" css={override} />
        </Button>
      ) : (
        <Button
          className={`btn-primary custom-file-button ${
            !file || disableButton ? "disabled" : ""
          }`}
          onClick={handleUploadClick}
          disabled={isLoading || !file || disableButton}
        >
          {uploadButtonLabel}
        </Button>
      )}

      {success && (
        <div className="alert alert-success">
          <CheckCircleOutlined /> {success}
        </div>
      )}

      {error && (
        <div className="error-message mt-2 clr-error">
          <CloseCircleOutlined /> {error}
        </div>
      )}
    </div>
  );
};

ReferralsFileUpload.defaultProps = {
  config: null,
};

ReferralsFileUpload.propTypes = {
  config: PropTypes.object.isRequired,
};

export default ReferralsFileUpload;
