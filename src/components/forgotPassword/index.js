import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordFormConfig from "../../config/component/forgotPasswordConfig";
import preLoginImage from "../../assets/images/preaLoginImage.png";
import validator from "validator";

import { LoginCss } from "../../styles/LoginCss";
import { API_FORGOT_PASSWORD } from "../../api";
import LoaderContext from "../../context/LoaderContext";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [success, setSuccess] = useState("");
  const { topBarRef } = React.useContext(LoaderContext);
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/login");
  };

  const onSubmit = (value) => {
    const { Email } = value;
    setFormMessage("");
    setSuccess("");
    if (validator.isEmail(Email)) {
      setIsLoading(true);
      topBarRef?.current?.continuousStart();
      setFormMessage("");
      const payload = { body: { EmailAddress: Email } };
      // forgot password api call----
      API_FORGOT_PASSWORD(payload)
        .then(function (response) {
          const { Status, ExceptionMessage } = response?.data?.message;
          if (Status === "Error") {
            setIsLoading(false);
            topBarRef?.current?.complete();
            setFormMessage(ExceptionMessage);
          } else {
            setIsLoading(false);
            topBarRef?.current?.complete();
            setSuccess("Reset password link sent successfully");
          }
        })
        .catch(function (error) {
          setIsLoading(false);
          topBarRef?.current?.complete();
          setFormMessage("Forgot password wrapper API Failed");
        });
    } else {
      setFormMessage("Enter valid Email!");
    }
  };
  return (
    <div className="forgotPassword">
      <LoginCss />
      <div className="flex-container parentWrapper">
        <div className="login-img">
          <img
            className="preLoginImage"
            src={preLoginImage}
            alt="preLoginImage"
          />
        </div>
        <ForgotPasswordForm
          config={ForgotPasswordFormConfig}
          onSubmit={onSubmit}
          backToLoginNav={backToLogin}
          formMessage={formMessage}
          isLoading={isLoading}
          success={success}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
