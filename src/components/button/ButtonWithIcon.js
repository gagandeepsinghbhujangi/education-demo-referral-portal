import PropTypes from "prop-types";
import Icon from "@ant-design/icons";

import { ButtonCss } from "../../styles/Button.jsx";

function ButtonWithIcon(props) {
  const {
    label,
    handleClick,
    customClass = "",
    icon,
    iconStyles = {},
    side,
    customIcon,
  } = props;

  return (
    <button
      onClick={handleClick}
      className={`${customClass} displayFlex justifyContentSB baseButton baseButtonStyles`}
    >
      <ButtonCss />
      {customIcon && <img src={customIcon} style={iconStyles} alt="icon" />}
      {!customIcon && side === "left" && (
        <Icon component={icon} style={iconStyles} />
      )}
      {label}
      {!customIcon && side !== "left" && (
        <Icon component={icon} style={iconStyles} />
      )}
    </button>
  );
}

ButtonWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  customClass: PropTypes.string,
  side: PropTypes.string,
  icon: PropTypes.object,
  iconStyles: PropTypes.object,
};

export default ButtonWithIcon;
