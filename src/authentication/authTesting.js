import { useNavigate } from "react-router-dom";
import { useAuthentication } from "./index";
import { getLeadIdFromCookie } from "./utility";

const AuthTesting = () => {
  const { signIn, signOut, isUserSignedIn } = useAuthentication();
  const navigate = useNavigate();

  const authSessionInfo = {
    isAuthenticated: true,
    leadId: "xyz001LeadID",
    authKey: "abc002AuthKey",
  };

  const onSignOut = () => {
    signOut();

    navigate("/");
  };

  return (
    <>
      <button onClick={() => signIn(authSessionInfo)}>SignIn</button>
      <button onClick={() => console.log(getLeadIdFromCookie())}>
        GetLeadID
      </button>
      <button onClick={() => console.log(isUserSignedIn())}>
        IsCookiePresent
      </button>
      <button onClick={onSignOut}>SignOut</button>
    </>
  );
};

export default AuthTesting;
