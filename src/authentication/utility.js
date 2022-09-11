import queryString from "query-string";

export const getAuthInfoFromCookie = (propertyName) => {
  //find authorization info from cookie
  let cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)auth-session-info\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  let val;
  try {
    val = JSON.parse(cookieValue)[propertyName];
  } catch (e) {
    val = {};
  }
  return val;
};

export const isCookieAuthInfoPresent = () => {
  const cookie = document.cookie; // store cookie in cookie 
  const authenticated =
    getAuthInfoFromCookie("authSessionState").isAuthenticated;

  if (cookie.indexOf("auth-session-info") >= 0 && authenticated) return true;
  else return false;
};

export const getLeadIdFromCookie = () => {
  return isCookieAuthInfoPresent()
    ? getAuthInfoFromCookie("authSessionState").leadId
    : "";
};

export const getProspectNameFromCookie = () => {
  const authData = isCookieAuthInfoPresent()
    ? getAuthInfoFromCookie("authSessionState")
    : null;

  if (authData) {
    const firstName = authData?.userInfo?.firstName; // set first name after find data from auth info
    const lastName = authData?.userInfo?.lastName; // set last name after find data from auth info
    return `${firstName} ${lastName}`;
  } else {
    return "";
  }
};

export const setAuthInfoInCookie = (authSessionState) => {
  let now = new Date();
  let time = now.getTime();
  const timeout = time + 24 * 1800 * 1000;
  const futureDate = time + 10 * 365 * 24 * 60 * 60;
  const timeSetter = authSessionState.isAuthenticated ? timeout : futureDate;
  now.setTime(timeSetter);

  let utmValues = queryString.parse(window.location.search);
  let utmObj = {
    utm_source_campaign: utmValues.utm_source_campaign,
    utm_source_name: utmValues.utm_source_name,
    utm_source_medium: utmValues.utm_source_medium,
    utm_source_term: utmValues.utm_source_term,
    utm_source_content: utmValues.utm_source_content,
  };
  if (JSON.stringify(utmObj) === JSON.stringify({})) {
    utmObj = getAuthInfoFromCookie("utmObj");
  }
  document.cookie = `auth-session-info=${JSON.stringify({
    authSessionState: authSessionState,
    utmObj: utmObj,
  })};expires=${now.toUTCString()};path=/`;
};

export const expireAuthInfoFromCookie = () => {
  document.cookie =
    "auth-session-info=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
};
