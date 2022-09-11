import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Radio } from "antd";
import BeatLoader from "react-spinners/BeatLoader";
import themes from "../../config/theme/theme.json";

const LoginForm = ({
  config,
  goToSignUp,
  onSubmit,
  goToForgotPassword,
  isLoading,
  formMessage,
  isLoader,
}) => {
  const {
    formTitle,
    submitButtonLabel,
    loginWithPhone,
    forgotPassword,
    signUp,
    formFields,
  } = config;

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    // setFormLayout(layout);
  };
  const onFinish = (value) => {
    onSubmit(value);
  };

  const onSignUp = (e) => {
    e.preventDefault();
    goToSignUp();
  };

  const onForgotPassword = (e) => {
    e.preventDefault();
    goToForgotPassword();
  };
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="loginForm">
      <div className="loginLabel">{formTitle}</div>
      {/* To show/hide form message  */}
      {formMessage && <div className="alert alert-error">{formMessage}</div>} 
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        className="login-form"
        onFinish={onFinish}
      >
        {/* mobile view-- */}
        {loginWithPhone ? (
          <Form.Item
            label={formFields.phone.label}
            rules={[
              {
                required: formFields.phone.rules.required,
                message: formFields.phone.rules.message,
              },
            ]}
            id={formFields.phone.label.replace(" ", "")}
            name={formFields.phone.label.replace(" ", "")}
          >
            <Input
              placeholder=""
              className="input"
              id={formFields.phone.label.replace(" ", "")}
              name={formFields.phone.label.replace(" ", "")}
            />
          </Form.Item>
        ) : (
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
        )}

        <Form.Item
          label={formFields.password.label}
          name={formFields.password.label.replace(" ", "")}
          className="mb-5"
          rules={[
            {
              required: formFields.password.rules.required,
              message: formFields.password.rules.message,
            },
          ]}
          id={formFields.password.label.replace(" ", "")}
          name={formFields.password.label.replace(" ", "")}
        >
          <Input.Password placeholder="" className="input" />
        </Form.Item>
        {/*  To show/ hide  forgot password in login page  */}
        {forgotPassword && (
          <div className="forgotPassword">
            <a
              className="forgot-password"
              href=""
              onClick={(e) => onForgotPassword(e)}
            >
              Forgot Password?
            </a>
          </div>
        )}

        <Form.Item>
          <Button
            type="primary"
            block
            className="login-btn"
            htmlType="submit"
            disabled={isLoading}
          >
            {/* to show/hide beat loader on login button */}
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
{/* To show/hide sign up button */}
      {signUp && (
        <div className="sign-msg">
          <span>Don’t have an Account?</span>
          <a href="" onClick={(e) => onSignUp(e)}>
            {" "}
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
};

LoginForm.defaultProps = {
  config: null,
  goToSignUp: null,
  onSubmit: null,
  goToForgotPassword: null,
  isLoading: null,
  formMessage: null,
};

LoginForm.propTypes = {
  config: PropTypes.object.isRequired,
  goToSignUp: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  goToForgotPassword: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  formMessage: PropTypes.string.isRequired,
};

export default LoginForm;
