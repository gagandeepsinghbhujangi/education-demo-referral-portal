import PropTypes from "prop-types";
import Form from "../form";

const SignUpForm = ({ config, onSubmit, backToLoginNav }) => {
  //props from config
  const { formTitle, backToLogin, lsqFormConfig } = config;

  const onBackToLogin = (e) => {
    e.preventDefault();
    backToLoginNav();
  };

  return (
    <div className="SignUpForm">
      <div className="loginLabel mb-none">{formTitle}</div>
      <Form lsqFormConfig={lsqFormConfig} btnText="Sign up" />
      {/* to enable / disable the login button */}
      {backToLogin && (
        <div className="sign-msg mt-15">
          Already have an Account?{" "}
          <a href="" className="cursor-pointer" onClick={onBackToLogin}>
            Login
          </a>
        </div>
      )}
    </div>
  );
};

SignUpForm.defaultProps = {
  config: null,
  onSubmit: null,
  backToLoginNav: null,
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  backToLoginNav: PropTypes.func.isRequired,
};

export default SignUpForm;
