import React, { useState } from "react";
import rightArrow from "../../assets/images/open-arrow-left.svg";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";
import themes from "../../config/theme/theme.json";
import { CheckOutlined } from "@ant-design/icons";

const ResetPasswordForm = ({
  config,
  onSubmit,
  backToLoginNav,
  isLoading,
  passwordError,
  confirmPasswordError,
  formMessage,
  success,
}) => {
  // props from config
  const { formTitle, submitButtonLabel, formFields, backToLogin } = config;

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => { };

  const onFinish = (value) => {
    onSubmit(value);
  };

  const onBackToLogin = () => {
    backToLoginNav();
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="resetPasswordForm">
      <div className="loginLabel mb-none">{formTitle}</div>
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        className="login-form mt-10"
        onFinish={onFinish}
      >
        {/* to show/hide success message */}
        {success && (
          <div className="alert alert-success">
            <CheckOutlined /> {success}
          </div>
        )}
        {/* To show/hide form message */}
        {formMessage && <div className="alert alert-error">{formMessage}</div>}

        <Form.Item
          label={formFields.newPassword.label}
          name={formFields.newPassword.label.replace(" ", "")}
          rules={[
            {
              required: formFields.newPassword.rules.required,
              message: formFields.newPassword.rules.message,
            },
          ]}
          id={formFields.newPassword.label.replace(" ", "")}        >
          <Input.Password placeholder="" className="input" />
        </Form.Item>
        <div className="clr-error mb-1">{passwordError}</div>
        <Form.Item
          label={formFields.confirmPassword.label}
          name={formFields.confirmPassword.label.replace(" ", "")}
          className="mb-5"
          rules={[
            {
              required: formFields.confirmPassword.rules.required,
              message: formFields.confirmPassword.rules.message,
            },
          ]}
          id={formFields.confirmPassword.label.replace(" ", "")}
        >
          <Input.Password placeholder="" className="input" />
        </Form.Item>
        <div className="clr-error mb-1">{confirmPasswordError}</div>
        <Form.Item>
          <Button type="primary" block className="login-btn" htmlType="submit">
            {/* to enable/ disable beat loader in reset button */}
            {isLoading ? (
              <BeatLoader
                size="10"
                color={themes.colors.primary}
                css={override}
              />
            ) : (
              submitButtonLabel
            )}
          </Button>
        </Form.Item>
      </Form>
      {/* to enable/disable back to login button */}
      {backToLogin && (
        <div className="sign-msg cursor-pointer" onClick={onBackToLogin}>
          <img src={rightArrow} alt="arrow" />
          Back to Login
        </div>
      )}
    </div>
  );
};

ResetPasswordForm.defaultProps = {
  config: null,
  onSubmit: null,
  backToLoginNav: null,
  isLoading: null,
  passwordError: null,
  confirmPasswordError: null,
  formMessage: null,
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  backToLoginNav: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  passwordError: PropTypes.string.isRequired,
  confirmPasswordError: PropTypes.string.isRequired,
  formMessage: PropTypes.string.isRequired,
};

export default ResetPasswordForm;
