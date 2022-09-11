import PropTypes from "prop-types";
import { ButtonCss } from "../../styles/Button.jsx";

function LinkButton(props) {
  const { label, handleClick, customClass = "" } = props;

  return (
    <>
      <ButtonCss />
      <button
        onClick={handleClick}
        className={`${customClass} baseButton baseLinkButton`}
      >
        {label}
      </button>
    </>
  );
}

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  customClass: PropTypes.string,
};

export default LinkButton;
