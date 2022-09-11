import PropTypes from "prop-types";

import Header from "../header";
import Content from "./content";

const DashboardSearch = ({ headerProps, contentProps }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get("search");

  return (
    <>
      <Header {...headerProps} searchText={searchText} />
      <Content {...contentProps} searchText={searchText} />
    </>
  );
};

DashboardSearch.propTypes = {
  headerProps: PropTypes.object,
  contentProps: PropTypes.object,
};

export default DashboardSearch;
