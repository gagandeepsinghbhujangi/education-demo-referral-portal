import PropTypes from "prop-types";

import { ButtonCss } from "../../styles/Button.jsx";

function Button(props) {
  const { label, handleClick, customClass = "" } = props;

  return (
    <>
      <ButtonCss />
      <button
        onClick={handleClick}
        className={`${customClass} baseButton baseButtonStyles`}
      >
        {label}
      </button>
    </>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  customStyles: PropTypes.object,
};

export default Button;
