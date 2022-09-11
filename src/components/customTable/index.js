import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { TableCss } from "../../styles/TableCss";
import DesktopTable from "./desktopView";
import { useMediaQuery } from "react-responsive";
import MobileViewForTable from "./mobileView";

const CustomTable = ({
  totalRecords,
  config,
  tableRows,
  isTableHeader,
  handleStatusChange,
  handleClearFilter,
  selectedStatus,
  handleCalendarChange,
  startDate,
  endDate,
  handlePageSizeChange,
  handlePageIndexChange,
  handleGoTONextPage,
  handleGoTOPreviousPage,
  pageIndex,
  perPage,
  isLoading,
}) => {
  const { Columns, Filters, Setting } = config; // props from config
  const [tableState, setTableState] = useState([]);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setTableState(tableRows);
  }, [tableRows]);

  const columns = React.useMemo(() => Columns, []);

  const onCalendarChange = (value) => {
    const startDate = value && value[0];
    const endDate = value && value[1];
    if (startDate && endDate) handleCalendarChange(startDate, endDate);
    else if (!startDate && !endDate) handleCalendarChange();
  };

  const clearFilter = () => {
    handleClearFilter();
  };

  return (
    <>
      <TableCss />
      {/* to show/hide table on mobile & tablet view--- */}
      {isTabletOrMobile ? (
        <MobileViewForTable
          data={tableState}
          columns={columns}
          Setting={Setting}
          Filters={Filters}
          onCalendarChange={onCalendarChange}
          isTableHeader={isTableHeader}
          clearFilter={clearFilter}
          perPage={perPage}
          handlePageSizeChange={handlePageSizeChange}
          selectedStatus={selectedStatus}
          handleStatusChange={handleStatusChange}
          isLoading={isLoading}
          totalRecords={totalRecords}
        />
      ) : (
        <DesktopTable
          data={tableState}
          columns={columns}
          Setting={Setting}
          Filters={Filters}
          onCalendarChange={onCalendarChange}
          isTableHeader={isTableHeader}
          totalRecords={totalRecords}
          clearFilter={clearFilter}
          handleStatusChange={handleStatusChange}
          selectedStatus={selectedStatus}
          startDate={startDate}
          endDate={endDate}
          selectedPageSize={perPage}
          handlePageSizeChange={handlePageSizeChange}
          handlePageIndexChange={handlePageIndexChange}
          handleGoTONextPage={handleGoTONextPage}
          handleGoTOPreviousPage={handleGoTOPreviousPage}
          selectedPageIndex={pageIndex}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

CustomTable.defaultProps = {
  config: {
    Columns: [
      {
        Header: "",
        accessor: "",
      },
    ],
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
  },
  tableRows: [],
  isTableHeader: true,
};

CustomTable.propTypes = {
  tableRows: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
};

export default CustomTable;
