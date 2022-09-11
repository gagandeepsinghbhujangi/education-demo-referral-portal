import { useNavigate } from "react-router-dom";
import AddReferralConfig from "../../config/component/addReferralConfig";
import { AddReferralFormCss } from "../../styles/AddReferralForm";
import AddReferralForm from "./addReferralForm";

const Index = ({ handleOnSuccess }) => {
  const navigate = useNavigate();

  const backToSignUp = () => {
    navigate("/login");
  };

  return (
    <div className="AddReferralConfig">
      <AddReferralFormCss />
      <div className="parentWrapper">
        <AddReferralForm
          config={AddReferralConfig}
          backToLoginNav={backToSignUp}
          handleOnSuccess={handleOnSuccess}
        />
      </div>
    </div>
  );
};

export default Index;
