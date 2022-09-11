import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import resetPassword from "../../config/component/resetPassword";
import ResetPasswordForm from "./ResetPasswordForm";
import preaLoginImage from "../../assets/images/preaLoginImage.png";
import { API_RESET_PASSWORD } from "../../api";
import CommonService from "../../services/CommonService";
import LoaderContext from "../../context/LoaderContext";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formMessage, setFormMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { topBarRef } = React.useContext(LoaderContext);

  let query = useQuery();
  const leadId = query.get("leadId");
  const tmpPassword = query.get("tmpPassword");

  useEffect(() => {
    if (!leadId && !tmpPassword) {
      navigate("/login");
    }
  }, [leadId, tmpPassword]);

  const checkFormData = (password, confirmPassword) => {
    if (!CommonService.passwordScheme(password)) {
      setPasswordError(resetPassword.passwordPattern);
      return false;
    } else {
      setPasswordError("");
    }

    if (!CommonService.passwordScheme(confirmPassword)) {
      setConfirmPasswordError(resetPassword.passwordPattern);
      return false;
    } else {
      setConfirmPasswordError("");
    }

    if (password !== confirmPassword) {
      setFormMessage(resetPassword.passwordMismatch);
      return false;
    } else {
      setFormMessage("");
    }

    return true;
  };

  const onSubmit = (value) => {
    const { NewPassword, ConfirmPassword } = value;
    const validation = checkFormData(NewPassword, ConfirmPassword);
    if (validation) {
      setIsLoading(true);
      topBarRef?.current?.continuousStart();
      let body = {
        LeadId: leadId,
        TemporaryPassword: tmpPassword,
        Password: NewPassword,
      };
      // reset password api call--
      API_RESET_PASSWORD({ body })
        .then(function (response) {
          const { data } = response;
          const { message } = data;
          const { Status, ExceptionMessage } = message;
          if (Status === "Error") {
            setFormMessage(ExceptionMessage);
            setIsLoading(false);
            topBarRef?.current?.complete();
          } else {
            setSuccess("Password Changed Successfully.");
            setIsLoading(false);
            topBarRef?.current?.complete();
            window.setTimeout(function () {
              navigate("/login");
            }, 1500);
          }
        })
        .catch(function (error) {
          setFormMessage("reset password wrapper API Failed");
          setIsLoading(false);
          topBarRef?.current?.complete();
        });
    }
  };

  const backToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="resetPassword">
      <div className="flex-container parentWrapper">
        <div className="login-img">
          <img
            className="preLoginImage"
            src={preaLoginImage}
            alt="preLoginImage"
          />
        </div>
        <ResetPasswordForm
          config={resetPassword}
          onSubmit={onSubmit}
          backToLoginNav={backToLogin}
          isLoading={isLoading}
          passwordError={passwordError}
          confirmPasswordError={confirmPasswordError}
          formMessage={formMessage}
          success={success}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
