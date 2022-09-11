import { useGlobalContext } from "../context/globalContext";
import {
  isCookieAuthInfoPresent,
  setAuthInfoInCookie,
  expireAuthInfoFromCookie,
  getAuthInfoFromCookie
} from "./utility";

export const useAuthentication = () => {
  const { globalData, setGlobalData } = useGlobalContext();
//after sign in find lead Id and login id
  const signIn = (authSessionInfo) => {
    const { leadId } = authSessionInfo;
    setAuthInfoInCookie(authSessionInfo);
    setGlobalData({
      ...globalData,
      loggedIn: true,
      leadId: leadId,
    });
  };

  const signOut = () => {
    expireAuthInfoFromCookie();
    setGlobalData({
      loggedIn: false,
      leadId: "",
    });
  };
//check user has auth info  
  const isUserSignedIn = () => {
    return isCookieAuthInfoPresent();
  };

  return { signIn, signOut, isUserSignedIn, getAuthInfoFromCookie };
};
