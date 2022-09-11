import PropTypes from "prop-types";

import Header from "../header";
import Content from "./content";

const Dashboard = ({ headerProps, contentProps }) => {
  return (
    <>
      <Header {...headerProps} isSearchEnable={false} />
      <Content {...contentProps} />
    </>
  );
};

Dashboard.propTypes = {
  headerProps: PropTypes.object,
  contentProps: PropTypes.object,
};

export default Dashboard;
