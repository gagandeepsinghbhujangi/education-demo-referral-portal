import React from "react";
import LoadingBar from "react-top-loading-bar";
import UserContext from "../../context/LoaderContext";

const TopLoader = ({ color, isLoader }) => {
  const { topBarRef } = React.useContext(UserContext);
  
  return <LoadingBar
      className="topLoader"
      color={color}
      ref={topBarRef}
      shadow={true}
    />
};

export default TopLoader;
