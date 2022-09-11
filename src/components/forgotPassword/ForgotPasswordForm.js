import React, { useState } from "react";
import rightArrow from "../../assets/images/open-arrow-left.svg";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";
import themes from "../../config/theme/theme.json";
import { CheckOutlined } from "@ant-design/icons";

const ForgotPasswordForm = ({
  config,
  onSubmit,
  backToLoginNav,
  formMessage,
  isLoading,
  success,
}) => {
  // props from config 
  const {
    formTitle,
    formSubLabel,
    submitButtonLabel,
    formFields,
    backToLogin,
  } = config;

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
    <div className="forgotPasswordForm">
      <div className="loginLabel mb-none">{formTitle}</div>
      <div className="subLabel login-form">{formSubLabel}</div>
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
        {success && (
          <div className="alert alert-success">
            <CheckOutlined /> {success}
          </div>
        )}
        {/* To show/ hide form message */}
        {formMessage && <div className="alert alert-error">{formMessage}</div>}

        <Form.Item
          label={formFields.email.label}
          rules={[
            {
              required: formFields.email.rules.required,
              message: formFields.email.rules.message,
            },
          ]}
          id={formFields.email.label.replace(" ", "")}
          name={formFields.email.label.replace(" ", "")}
        >
          <Input
            placeholder=""
            className="input"
            id={formFields.email.label.replace(" ", "")}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            block
            className="login-btn"
            htmlType="submit"
            disabled={isLoading}
          >
            {/* to show/hide beat loader click get password link button */}
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
      {/* here check to show/hide back to login button */}
      {backToLogin && (
        <div className="sign-msg cursor-pointer" onClick={onBackToLogin}>
          <img src={rightArrow} alt="arrow" />
          Back to Login
        </div>
      )}
    </div>
  );
};

ForgotPasswordForm.defaultProps = {
  config: null,
  onSubmit: null,
  backToLoginNav: null,
  formMessage: null,
  isLoading: null,
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
  backToLoginNav: PropTypes.func.isRequired,
  formMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ForgotPasswordForm;
