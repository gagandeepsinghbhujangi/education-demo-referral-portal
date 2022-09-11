import PropTypes from "prop-types";
import Form from "./form/Form";

const AddReferralForm = ({ config, handleOnSuccess }) => {
  const { formTitle, lsqFormConfig } = config;

  return (
    <div className='AddReferralForm'>
      <div className='loginLabel mb-none'>{formTitle}</div>
      <Form
        lsqFormConfig={lsqFormConfig}
        btnText='Add Applicant'
        handleOnSuccess={handleOnSuccess}
      />
    </div>
  );
};

AddReferralForm.defaultProps = {
  config: null,
  handleOnSuccess: null,
};

AddReferralForm.propTypes = {
  config: PropTypes.object.isRequired,
  handleOnSuccess: PropTypes.func.isRequired,
};

export default AddReferralForm;
