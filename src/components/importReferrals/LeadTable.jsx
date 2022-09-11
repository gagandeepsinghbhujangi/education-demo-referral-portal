import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CheckOutlined } from "@ant-design/icons";

const LeadTable = ({ config, tableData }) => {
  const [successRow, setSuccessRow] = useState(null);
  const [failedRow, setFailedRow] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  const [tab, setTab] = useState(0);
  const [tableState, setTableState] = useState(null);
  const { columns } = config;

  useEffect(() => {
    const tableFlatArr = tableData.flat(1);
    setTotalLength(tableFlatArr.length);
    const filterSuccess = [];
    tableFlatArr.map((row, index) => {
      if (row && row.status && row.status === "Success") {
        filterSuccess.push(row);
      }
    });

    const filterFailed = [];
    tableFlatArr.map((row) => {
      if (
        (row && row.status && row.status === "Duplicate") ||
        (row && row.status && row.status === "InvalidPhone")
      ) {
        filterFailed.push(row);
      }
    });

    setSuccessRow(filterSuccess);
    setFailedRow(filterFailed);
    setTableState(filterSuccess);
  }, [tableData]);

  const handleTab = (tab) => {
    if (tab === 1) {
      setTab(1);
      setTableState(failedRow);
    } else {
      setTab(0);
      setTableState(successRow);
    }
  };

  return (
    <div className='leads-section'>
      <h3>
        {successRow && successRow.length + failedRow && failedRow.length} Total{" "}
        {`${totalLength > 1 ? "Leads" : "Lead"}`}
      </h3>
      <div className='tab-section'>
        <ul>
          <li
            className={`success cursor-pointer ${tab === 0 ? "active" : ""}`}
            onClick={() => handleTab(0)}>
            {(successRow && successRow.length) || 0} Successfully Imported
          </li>
          <li
            className={`fail cursor-pointer ${tab === 1 ? "active" : ""}`}
            onClick={() => handleTab(1)}>
            {(failedRow && failedRow.length) || 0} Failed to Import
          </li>
        </ul>
      </div>

      <div className='grid-container hidden-mobile'>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            return <div className='grid-item head'>{col.header}</div>;
          })}

        {tableState &&
          tableState.length > 0 &&
          tableState.map((item, index) => {
            return (
              <>
                {item &&
                  item.length > 0 &&
                  item.map((i) => {
                    return i.Attribute === "Status" ? (
                      <div
                        className={`grid-item content ${
                          index % 2 ? "bg2" : "bg1"
                        }`}>
                        <div
                          className={`${
                            item.status === "Duplicate" ||
                            item.status === "InvalidPhone"
                              ? "error"
                              : "success"
                          }`}>
                          {item.status === "Duplicate" ? "Duplicate" : ""}
                          {item.status === "InvalidPhone"
                            ? "Invalid Phone"
                            : ""}
                          {item.status === "Success" ? (
                            <span>
                              <CheckOutlined /> Successfully Executed
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`grid-item content ${
                          index % 2 ? "bg2" : "bg"
                        }`}>
                        {i.Value}
                      </div>
                    );
                  })}
              </>
            );
          })}
      </div>

      <div className='mobile-table hidden-desktop'>
        {tableState &&
          tableState.length > 0 &&
          tableState.map((item, topIndex) => {
            return (
              <div className='table-content-row'>
                {item &&
                  item.map((row, index) => {
                    return (
                      <div key={index + "_mobile_row"}>
                        {columns &&
                          columns.length > 0 &&
                          columns.map((col, index) => {
                            return col.accessor === row.Attribute ? (
                              <div key={index + "_mobile_col"}>
                                <span>{col.header}</span>

                                {col.accessor === "Status" ? (
                                  <p
                                    className={`${
                                      item.status === "Duplicate" ||
                                      item.status === "InvalidPhone"
                                        ? "error w-210"
                                        : "success w-210"
                                    }`}>
                                    {item.status === "Duplicate"
                                      ? "Duplicate"
                                      : ""}
                                    {item.status === "InvalidPhone"
                                      ? "Invalid Phone"
                                      : ""}
                                    {item.status === "Success" ? (
                                      <span>Successfully Executed</span>
                                    ) : (
                                      ""
                                    )}
                                  </p>
                                ) : (
                                  <p>{row.Value}</p>
                                )}
                              </div>
                            ) : null;
                          })}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

LeadTable.defaultProps = {
  config: null,
  tableData: null,
};

LeadTable.propTypes = {
  config: PropTypes.object.isRequired,
  tableData: PropTypes.array,
};

export default LeadTable;
