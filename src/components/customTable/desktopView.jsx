import { usePagination, useSortBy, useTable } from "react-table";
import { Button, DatePicker, Space, Dropdown, Menu } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import upSort from "../../assets/images/icons/up-sort.svg";
import downSort from "../../assets/images/icons/down-sort.svg";
import unSort from "../../assets/images/icons/un-sort.svg";
import { DownOutlined } from "@ant-design/icons";
import CommonService from "../../services/CommonService";
import dashboardConfig from "../../config/component/dashboardConfig";
const { RangePicker } = DatePicker;

const DesktopTable = ({
  data,
  columns,
  Filters,
  Setting,
  onCalendarChange,
  isTableHeader,
  totalRecords = 0,
  handleStatusChange,
  selectedStatus,
  startDate,
  endDate,
  selectedPageSize = 10,
  handlePageSizeChange,
  handlePageIndexChange,
  handleGoTONextPage,
  handleGoTOPreviousPage,
  selectedPageIndex,
  isLoading,
}) => {
  //for use table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      manualPagination: !Setting.Pagination.Enable,
      manualSortBy: !Setting.Sorting,
      initialState: { pageSize: selectedPageSize },
      sortTypes: {
        alphanumeric: (row1, row2, columnName) => {
          return CommonService.compareIgnoreCase(
            row1.values[columnName] || "",
            row2.values[columnName] || ""
          );
        },
      },
    },
    useSortBy,
    usePagination
  );
  const { stages } = dashboardConfig;
  //for pagination
  let recordsCountFrom = pageIndex * pageSize + 1;
  let recordsCountTo = recordsCountFrom + page.length - 1;
  let recordsInfoText = `${recordsCountFrom} - ${recordsCountTo} of  ${data.length} results`;

  const showStatusColorBox = (status, indexNo) => {
    let element = document.getElementById("tr-dynamic-" + indexNo);

    switch (status) {
      case "Prospect":
        if (element) {
          element.classList.add("tr-dynamic-singed");
        }
        return "singed";
      case "Application Initiated":
        if (element) {
          element.classList.add("tr-dynamic-initiated");
        }
        return "initiated";
      case "Payment Completed":
        if (element) {
          element.classList.add("tr-dynamic-completed");
        }
        return "completed";
      case "Enrolled":
        if (element) {
          element.classList.add("tr-dynamic-enrolled");
        }
        return "enrolled";
      case "Application Submitted":
        if (element) {
          element.classList.add("tr-dynamic-submitted");
        }
        return "submitted";

      default:
        return "";
    }
  };

  const [pageOptionCustomIndex, setPageOptionCustomIndex] = useState(0);
  const [pageOptionCustom, setPageOptionCustom] = useState(null);

  useEffect(() => {
    setPageOptions();
  }, [selectedPageSize, totalRecords]);

  const setPageOptions = () => {
    let pageOptionCount = totalRecords / selectedPageSize;
    const num = Math.ceil(pageOptionCount);
    const pageOptionArr = [...Array(num).keys()];
    setPageOptionCustom(pageOptionArr);
  };

  const handleGoTOPage = (index) => {
    if (index) {
      handlePageIndexChange(index);
    }
  };

  const handleGoTONextPageClick = () => {
    handleGoTONextPage();
    if (selectedPageIndex >= 4) {
      setPageOptionCustomIndex(selectedPageIndex - 1);
    }
  };

  const handleGoTOPreviousPageClick = () => {
    if (selectedPageIndex >= 4) {
      setPageOptionCustomIndex(selectedPageIndex - 3);
    }
    handleGoTOPreviousPage();
  };

  const menu = (
    // to show the dropdown of all status in desktop view via config file ----
    <Menu onClick={handleStatusChange} selectedKeys={selectedStatus}>
      {stages &&
        stages.map((leadStatus) => {
          return (
            <Menu.Item key={leadStatus.value}>{leadStatus.title}</Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <section className='customTable'>
      {/* show / hide the table top header  ---- */}
      {isTableHeader && (
        <>
          <div className='tableheader'>
            {/* to show / hide total lead  */}
            {Setting.SearchLabel && (
              <h2 className='tabletitle'>
                {totalRecords} Total {`${totalRecords > 1 ? "Leads" : "Lead"}`}
              </h2>
            )}

            <div className='tablebuttons'>
              {(Filters.date || Filters.status) && (
                <>
                  <Dropdown overlay={menu}>
                    <Button className='table-options'>
                      {selectedStatus || "All Status"} <DownOutlined />
                    </Button>
                  </Dropdown>
                  {/* To show/hide date range---- */}
                  {Filters.date && (
                    <Space direction='vertical' size={12}>
                      <RangePicker
                        onCalendarChange={onCalendarChange}
                        defaultValue={[startDate, endDate]}
                      />
                    </Space>
                  )}
                </>
              )}
              {/* To show/hide export button */}
              {Setting.Export && (
                <Button danger className='btn-export'>
                  Export
                </Button>
              )}
            </div>
          </div>
        </>
      )}

      <table {...getTableProps()} className='customTableBody'>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`tr_table_${index}`}>
              {headerGroup.headers.map((column, headerIndex) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={`th_table_${headerIndex}_${index}`}>
                  {column.render("Header")}
                  {/* to hide/show the sorting form header in table-- */}
                  {Setting.Sorting && (
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img src={downSort} alt='up sort' />
                        ) : (
                          <img src={upSort} alt='up sort' />
                        )
                      ) : (
                        <img src={unSort} alt='up sort' />
                      )}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, indexNo) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={`tr-dynamic tr-dynamic-${indexNo}`}
                id={`tr-dynamic-${indexNo}`}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === "mx_Application_Stage" && (
                        <span
                          className={`status-color ${showStatusColorBox(
                            cell.value || "-",
                            indexNo
                          )}`}></span>
                      )}
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* show / hide no record found--- */}
      {!isLoading && parseInt(totalRecords) === 0 && (
        <div className='text-center' style={{ padding: "50px" }}>
          No record(s) found{" "}
        </div>
      )}
      {/*  pagination  */}
      {((Setting.Pagination.Enable && totalRecords > 10) ||
        selectedPageIndex > 1) && (
          <section className='pagination'>
            <div className='go-to-page-main'>
              <span className='go-to-page'>{`${(selectedPageIndex - 1) * selectedPageSize + 1
                } - ${(selectedPageIndex - 1) * selectedPageSize +
                1 +
                (selectedPageSize - 1)
                } of  ${totalRecords} results`}</span>
            </div>
            <div className='page-changer'>
              <div className='previous'>
                <button
                  onClick={() => handleGoTOPreviousPageClick()}
                  disabled={!(selectedPageIndex > 1)}
                  title='Previous Page'
                  className='pg-arrow-btn'>
                  {"<"}
                </button>
                {pageOptionCustom &&
                  pageOptionCustom.length > 0 &&
                  pageOptionCustom
                    .slice(pageOptionCustomIndex, pageOptionCustomIndex + 4)
                    .map((page) => {
                      return (
                        <button
                          onClick={() => handleGoTOPage(page + 1)}
                          title={`Go to page ${page + 1}`}
                          className={`pgBtn ${selectedPageIndex === page + 1
                            ? "active-page-btn"
                            : ""
                            }`}>
                          {page + 1}
                        </button>
                      );
                    })}
              </div>
              {pageOptionCustom && pageOptionCustom.length > 5 && (
                <span className='page-counter'>
                  <div className='pageDot'></div>
                  <div className='pageDot'></div>
                  <div className='pageDot'></div>
                </span>
              )}
              {pageOptionCustom && pageOptionCustom.length > 5 && (
                <button
                  className={`${selectedPageIndex === pageOptionCustom.length
                    ? "pgBtn active-page-btn"
                    : ""
                    }`}
                  onClick={() =>
                    handleGoTOPage(pageOptionCustom && pageOptionCustom.length)
                  }
                  style={{ marginRight: "3px" }}
                  title={`Go to page ${pageOptionCustom && pageOptionCustom.length
                    }`}>
                  {pageOptionCustom && pageOptionCustom.length}
                </button>
              )}
              <div className='previous'>
                <button
                  onClick={() => handleGoTONextPageClick()}
                  title='Next Page'
                  disabled={
                    pageOptionCustom &&
                    pageOptionCustom.length <= selectedPageIndex
                  }
                  className='pgBtn'>
                  {">"}
                </button>{" "}
              </div>
            </div>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                handlePageSizeChange(Number(e.target.value));
              }}
              className='select-page'>
              {[10, 20, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </section>
        )}
    </section>
  );
};

DesktopTable.defaultProps = {
  data: null,
  columns: null,
  onCalendarChange: null,
  Filters: { date: false, status: false },
  Setting: {
    Sorting: false,
    Export: false,
    Pagination: {
      Size: 10,
      Enable: false,
    },
    SearchLabel: false,
  },
  isTableHeader: true,
};

DesktopTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  Filters: PropTypes.object.isRequired,
  Setting: PropTypes.object.isRequired,
  onCalendarChange: PropTypes.func.isRequired,
};

export default DesktopTable;
