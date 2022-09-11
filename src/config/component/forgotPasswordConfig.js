const ForgotPasswordFormConfig = {
  formTitle: "Forgot Password",
  formSubLabel:
    "Please enter your email and we will send you a password reset link.",
  submitButtonLabel: "Get Reset Password Link",
  backToLogin: true,
  formFields: {
    email: {
      label: "Email",
      type: "text",
      placeholder: "",
      defaultValue: "",
      rules: {
        required: true,
        message: "Please input your username!",
      },
    },
  },
};

export default ForgotPasswordFormConfig;
