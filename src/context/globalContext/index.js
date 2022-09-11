import { createContext, useContext, useState } from "react";
import {
  isCookieAuthInfoPresent,
  getLeadIdFromCookie,
} from "../../authentication/utility";

const GlobalContext = createContext(null);

const GlobalContextWrapper = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    loggedIn: isCookieAuthInfoPresent(), // set login id form cookie
    leadId: getLeadIdFromCookie(), // set lead id form cookie
  });

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const data = useContext(GlobalContext);
  return data;
};

export default GlobalContextWrapper;
