import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../authentication";
import LoginForm from "../../components/login/loginForm";
import loginFormConfig from "../../config/component/loginFormConfig";
import { LoginCss } from "../../styles/LoginCss";
import preLoginImage from "../../assets/images/preaLoginImage.png";
import { API_GET_LEAD_DETAILS_BY_ID, API_LOGIN } from "../../api";
import validator from "validator";
import LoaderContext from "../../context/LoaderContext";
import projectConfig from "../../config/page/project";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const { topBarRef } = React.useContext(LoaderContext);
  const { isLoader } = projectConfig; // to enable and disable loader
  const { signIn } = useAuthentication();

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToForgotPassword = () => {
    navigate("/forgotpassword");
  };

  const onSubmit = (value) => {
    const { EmailAddress, Password } = value;

    if (validator.isEmail(EmailAddress)) {
      setFormMessage("");
      setIsLoading(true);
      if (topBarRef.current) {
        topBarRef?.current?.continuousStart();
      }

      const obj = {
        body: {
          EmailAddress: EmailAddress,
          Password: Password,
        },
      };
      // login api call
      API_LOGIN(obj)
        .then(function (response) {
          if (response && response.data && response.data.message) {
            API_GET_LEAD_DETAILS_BY_ID({
              params: {
                id: response.data.message.LeadId,
              },
            })
              .then(function (res) {
                if (response.data.message.LeadId) {
                  const { message } = res.data;
                  const authSessionInfo = {
                    isAuthenticated: true,
                    leadId: response.data.message.LeadId,
                    authKey: response.data.message.AuthKey,
                  };

                  if (message && message.length > 0) {
                    authSessionInfo.userInfo = {
                      firstName: message[0].FirstName,
                      lastName: message[0].LastName,
                    };
                  }

                  signIn(authSessionInfo);
                  navigate("/myreferrals");
                } else {
                  setFormMessage("Enter valid Email or Password!");
                }
                setIsLoading(false);
                topBarRef?.current?.complete();
              })
              .catch(function (error) {
                console.log(error, "error");
              });
          } else {
            setIsLoading(false);
            topBarRef?.current?.complete();
          }
        })
        .catch(function (error) {
          setIsLoading(false);
          topBarRef?.current?.complete();
          setFormMessage(error.response.data.ExceptionMessage);
        });
    } else {
      setFormMessage("Enter valid Email!");
    }
  };

  return (
    <div className='loginView'>
      <LoginCss />
      <div className='flex-container parentWrapper'>
        <div className='login-img'>
          <img
            className='preLoginImage'
            src={preLoginImage}
            alt='preLoginImage'
          />
        </div>
        <LoginForm
          config={loginFormConfig}
          goToSignUp={goToSignUp}
          onSubmit={onSubmit}
          goToForgotPassword={goToForgotPassword}
          isLoading={isLoading}
          formMessage={formMessage}
          isLoader={isLoader}
        />
      </div>
    </div>
  );
};

export default LoginView;
