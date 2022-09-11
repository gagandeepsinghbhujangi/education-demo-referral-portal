const resetPassword = {
  formTitle: "Reset Password",
  submitButtonLabel: "Submit",
  backToLogin: true,
  passwordPattern:
    "Min. Password length should be 8 character. Required atleast one number & one uppercase & one smallcase & one special character. [@ $ ! % * # ? &] ",
  passwordMismatch: "Your password and confirmation password do not match",
  formFields: {
    newPassword: {
      label: "New Password",
      type: "text",
      placeholder: "",
      defaultValue: "",
      rules: {
        required: true,
        message: "Please input your password!",
      },
    },
    confirmPassword: {
      label: "Confirm Password",
      type: "text",
      placeholder: "",
      defaultValue: "",
      rules: {
        required: true,
        message: "Please input same password as above!",
      },
    },
  },
};

export default resetPassword;
