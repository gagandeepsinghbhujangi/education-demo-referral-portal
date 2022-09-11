import { Button, DatePicker, Space, Menu, Dropdown } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { DownOutlined } from "@ant-design/icons";
import dashboardConfig from "../../config/component/dashboardConfig";

const { RangePicker } = DatePicker;

const MobileViewForTable = ({
  data,
  columns,
  Filters,
  Setting,
  onCalendarChange,
  isTableHeader,
  handleStatusChange,
  selectedStatus,
  clearFilter,
  isLoading,
  handlePageSizeChange,
  totalRecords,
}) => {
  const { stages } = dashboardConfig; // props from config
  const dataArr = data;
  const [state, setState] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    setState(data);
  }, [data]);

  const fetchMoreData = () => {
    const totalLength = pageSize + 10;
    if (totalRecords > pageSize) {
      setPageSize(totalLength);
      handlePageSizeChange(totalLength);
    }
  };

  const leadCard = (card) => {
    return (
      <div className="row card">
        <div className="column">
          {columns &&
            columns.length > 0 &&
            columns.map((head, index) => {
              return (
                (!(index % 2) && (
                  <div className="card-col">
                    <div className="card-heading">{head.Header}</div>
                    <div className="card-text">{card[head.accessor]}</div>
                  </div>
                )) ||
                null
              );
            })}
        </div>

        <div className="column">
          {columns &&
            columns.length > 0 &&
            columns.map((head, index) => {
              return (
                (index % 2 && (
                  <div className="card-col">
                    <div className="card-heading">{head.Header}</div>
                    <div className="card-text">{card[head.accessor]}</div>
                  </div>
                )) ||
                null
              );
            })}
        </div>
      </div>
    );
  };

  const menu = (
    // show all lead status in dropdown------
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
    <div className="mobile">
      <div className="mobileHead">
        {/* show/hide total lead on mobile view */}
        {isTableHeader && Setting.SearchLabel && (
          <h2 className="tabletitle inline-block">
            {totalRecords} Total {`${totalRecords > 1 ? "Leads" : "Lead"}`}
          </h2>
        )}
        {/* {selectedStatus && (
          <Button
            danger
            className="btn-export inline-block float-right ml-1 clear"
            onClick={clearFilter}
          >
            Clear
          </Button>
        )} */}
        {/* to show / hide table header---- */}
        {isTableHeader && (
          <div className="btn-box">
            {Filters.status && (
              <>
                <Dropdown overlay={menu}>
                  <Button className="table-options">
                    {selectedStatus || "All Status"} <DownOutlined />
                  </Button>
                </Dropdown>
              </>
            )}
            {/* to show/ hide date range on table header in mobile view------ */}
            {Filters.date && (
              <Space direction="vertical" size={12} className="float-right">
                <RangePicker onCalendarChange={onCalendarChange} />
              </Space>
            )}
          </div>
        )}
      </div>
      <div className="cards autoScroll" id="scrollableDiv">
        {/* to check length of data and enable/disable infinite scroll */}
        {state && state.length > 0 && (
          <InfiniteScroll
            dataLength={state && state.length}
            next={fetchMoreData}
            hasMore={true}
            // loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            className="infinite-scroll-component-bottom"
          >
            {state.map((card, index) => (
              <div key={index}>{leadCard(card)}</div>
            ))}
          </InfiniteScroll>
        )}
        {/* to show / hide no record found on selecting the status */}
        {!isLoading && parseInt(state && state.length) === 0 && (
          <div className="text-center" style={{ padding: "50px" }}>
            No record(s) found{" "}
          </div>
        )}
        {/* {data &&
          data.length > 0 &&
          data.map((card) => {
            return leadCard(card);
          })}*/}
      </div>
    </div>
  );
};

MobileViewForTable.defaultProps = {
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

MobileViewForTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  Filters: PropTypes.object.isRequired,
  Setting: PropTypes.object.isRequired,
  onCalendarChange: PropTypes.func.isRequired,
};

export default MobileViewForTable;
