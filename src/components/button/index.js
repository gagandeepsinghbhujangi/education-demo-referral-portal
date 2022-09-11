import PropTypes from "prop-types";
import { useState } from "react";

import ButtonWithIcon from "./ButtonWithIcon";
import DefaultButton from "./DefaultButton";
import LinkButton from "./LinkButton";

import "../../styles/globalStyles.css";

function Button(props) {
  const { type, ...rest } = props;

  if (type === "LinkButton") {
    return <LinkButton {...rest} />;
  }

  if (type === "ButtonWithIcon") {
    return <ButtonWithIcon {...rest} />;
  }

  return <DefaultButton {...rest} />;
}

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
