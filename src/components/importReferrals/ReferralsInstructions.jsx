import PropTypes from "prop-types";
import CommonService from "../../services/CommonService";
import { DownloadOutlined } from "@ant-design/icons";

const ReferralsInstructions = ({ config, instructionsConfig }) => {
  const { downloadButtonLabel, tableData } = instructionsConfig;

  const instructions = config || [];
  const createMarkup = (item) => {
    return {
      __html: item,
    };
  };

  const downloadFile = (e) => {
    e.preventDefault();
    if (tableData) {
      CommonService.generateSampleCSVData(
        tableData.tableHead,
        tableData.tableBody,
        tableData.sampleFileName
      );
    }
  };

  return (
    <div className="upload-info">
      <h3>Instructions</h3>
      <div className="info-content">
        <ul>
          {instructions &&
            instructions.length > 0 &&
            instructions.map((item, index) => {
              return (
                <li key={index + "_instructions"}>
                  <div dangerouslySetInnerHTML={createMarkup(item)}></div>
                </li>
              );
            })}
        </ul>
        <a className="downloadSample font3" onClick={downloadFile}>
          <DownloadOutlined /> {downloadButtonLabel}
        </a>
      </div>
    </div>
  );
};

ReferralsInstructions.defaultProps = {
  config: null,
};

ReferralsInstructions.propTypes = {
  config: PropTypes.object.isRequired,
};

export default ReferralsInstructions;
