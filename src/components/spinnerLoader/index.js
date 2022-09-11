import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import themes from "../../config/theme/theme.json";

const SpinnerLoader = () => {
  const bouncerStyle = {
    position: "fixed",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="flex-center">
      <ClipLoader css={bouncerStyle} color={themes.colors.primary} size={50} />
    </div>
  );
};

export default SpinnerLoader;
