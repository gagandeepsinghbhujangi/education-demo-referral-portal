import { useNavigate } from "react-router-dom";
import SignUpFormConfig from "../../config/component/singUpConfig";
import { LoginCss } from "../../styles/LoginCss";
import SignUpForm from "./SingUpForm";
import preaLoginImage from "../../assets/images/preaLoginImage.png";

const Index = () => {
  const navigate = useNavigate();

  const backToSignUp = () => {
    navigate("/login");
  };

  const onSubmit = () => {
    alert();
  };
  return (
    <div className="SignUpFormConfig">
      {/* <LoginCss /> */}
      <div className="flex-container parentWrapper">
        <div className="login-img">
          <img
            className="preLoginImage"
            src={preaLoginImage}
            alt="preLoginImage"
          />
        </div>

        <SignUpForm
          config={SignUpFormConfig}
          onSubmit={onSubmit}
          backToLoginNav={backToSignUp}
        />
      </div>
    </div>
  );
};

{
  /*  */
}
export default Index;
