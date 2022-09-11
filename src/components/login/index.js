import { Outlet } from "react-router-dom";
import { LoginCss } from "../../styles/LoginCss";

const LoginContainer = () => {
  return (
    <>
      <LoginCss />
      <Outlet />
    </>
  );
};

export default LoginContainer;
