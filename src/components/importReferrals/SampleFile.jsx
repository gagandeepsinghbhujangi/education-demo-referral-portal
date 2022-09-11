import { DownloadOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import PropTypes from "prop-types";
import CommonService from "../../services/CommonService";

const { Panel } = Collapse;
const SampleFile = ({ config, isCollapse, setIsCollapse }) => {
  const { title, message, downloadButtonLabel, tableData } = config;

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
    <div>
      <Collapse
        defaultActiveKey={[isCollapse]}
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <Panel header={title} key={isCollapse}>
          <div>
            <p className="sample-text">{message}</p>
            <a className="downloadSample font3" onClick={downloadFile}>
              <DownloadOutlined /> {downloadButtonLabel}
            </a>
          </div>
          <section className="sample-table">
            <header>
              {tableData &&
                tableData.tableHead.length > 0 &&
                tableData.tableHead.map((head, index) => {
                  return (
                    <div className="col" key={index + "sample-head"}>
                      {head}
                    </div>
                  );
                })}
            </header>
            <div className="row">
              {tableData &&
                tableData.tableBody.length > 0 &&
                tableData.tableBody[0].map((value, index) => {
                  return (
                    <div className="col" key={index + "sample-value"}>
                      {value}
                    </div>
                  );
                })}
            </div>
          </section>
        </Panel>
      </Collapse>
    </div>
  );
};

SampleFile.defaultProps = {
  config: null,
};

SampleFile.propTypes = {
  config: PropTypes.object.isRequired,
};

export default SampleFile;
