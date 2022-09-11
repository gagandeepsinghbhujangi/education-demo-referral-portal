import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ForgotPassword from "../components/forgotPassword";
import Header from "../components/header";
import LoginContainer from "../components/login";
import ResetPassword from "../components/resetPassword";
import SignUp from "../components/signUp";
import LoginView from "../views/login/LoginView";

const PreLoginRoutes = ({ isUserSignedIn }) => {
  const navigate = useNavigate();
  let match = useLocation();

  useEffect(() => {
    // if (match.pathname === "/") {
    //   navigate("/");
    // } else {
    //   navigate(match.pathname);
    // }
    if (
      !isUserSignedIn &&
      match.pathname !== "/resetpassword" &&
      match.pathname !== "/forgotpassword" &&
      match.pathname !== "/signup"
    ) {
      navigate("/");
    }
  }, []);

  return (
    <>
    {/* send props to header and control search/profile enable, disable */}
      <Header isSearchEnable={false} isProfileEnable={false} />
      <Routes>
        <Route path="/" element={<LoginContainer />}>
          <Route index element={<LoginView />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginView />} />
        </Route>
      </Routes>
    </>
  );
};

export default PreLoginRoutes;
