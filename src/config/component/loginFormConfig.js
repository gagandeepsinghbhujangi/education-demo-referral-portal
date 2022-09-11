const loginFormConfig = {
  formTitle: "Login",
  submitButtonLabel: "Login",
  loginWithPhone: false,
  forgotPassword: true,
  signUp: true,
  formFields: {
    email: {
      label: "Email Address",
      type: "text",
      placeholder: "",
      defaultValue: "",
      rules: {
        required: true,
        message: "Please input your username!",
      },
    },
    phone: {
      label: "Phone Number",
      type: "text",
      placeholder: "",
      defaultValue: "",
      rules: {
        required: true,
        message: "Please input your phone!",
      },
    },
    password: {
      label: "Password",
      type: "text",
      placeholder: "",
      defaultValue: "",
      rules: {
        required: true,
        message: "Please input your password!",
      },
    },
  },
};

export default loginFormConfig;
