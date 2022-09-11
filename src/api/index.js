import axios from "axios";
import { WRAPPER_LAPP_URLS } from "./wrapperLappUrl";
import { V2_ENDPOINTS, PORTAL_SIGN_IN_ENDPOINTS } from "./endpoints";
import projectConfig from "../config/page/project";
import CommonService from "../services/CommonService";

const { portalTestUrl, portalLiveUrl } = projectConfig;
const {
  V2_API_WRAPPER,
  PORTAL_SIGN_IN_API_WRAPPER,
  PORTAL_ELASTIC_SEARCH_API_WRAPPER,
} = WRAPPER_LAPP_URLS;

/*======================================
************ SIGNING API'S ************
=======================================*/

const API_LOGIN = async (payload) => {
  const { params, body } = payload;

  const promise = axios.post(PORTAL_SIGN_IN_API_WRAPPER, {
    method: "POST",
    endpoint: PORTAL_SIGN_IN_ENDPOINTS.SIGN_IN,
    params: params,
    data: body,
  });
  return promise;
};

const API_GET_OTP = async (payload) => {
  const { params, body } = payload;

  const promise = axios.post(PORTAL_SIGN_IN_API_WRAPPER, {
    method: "POST",
    endpoint: PORTAL_SIGN_IN_ENDPOINTS.GET_OTP,
    params: params,
    data: body,
  });
  return promise;
};

const API_RESET_PASSWORD = async (payload) => {
  const { params, body } = payload;

  const promise = axios.post(PORTAL_SIGN_IN_API_WRAPPER, {
    method: "POST",
    endpoint: PORTAL_SIGN_IN_ENDPOINTS.RESET_PASSWORD,
    headers: {
      Referer: portalLiveUrl || portalTestUrl,
    },
    params: params,
    data: body,
  });
  return promise;
};

const API_FORGOT_PASSWORD = async (payload) => {
  const { params, body } = payload;

  const promise = axios.post(PORTAL_SIGN_IN_API_WRAPPER, {
    method: "POST",
    endpoint: PORTAL_SIGN_IN_ENDPOINTS.FORGOT_PASSWORD,
    headers: {
      Referer: portalLiveUrl || portalTestUrl,
    },
    params: params,
    data: body,
  });
  return promise;
};

/*======================================
********** PORTAL DATA API'S **********
=======================================*/

const API_GET_LEAD_DETAILS_BY_ID = async (payload) => {
  const { params, body } = payload;

  const promise = axios.post(V2_API_WRAPPER, {
    method: "GET",
    endpoint: V2_ENDPOINTS.GET_LEAD_BY_ID,
    params: params,
    data: body,
  });
  return promise;
};

const API_GET_LEADS_BY_ADVANCED_SEARCH = async (payload) => {
  const { params, body } = payload;
  CommonService.afterSessionTimeOut();
  const promise = axios.post(V2_API_WRAPPER, {
    method: "POST",
    endpoint: V2_ENDPOINTS.GET_LEADS_BY_ADVANCED_SEARCH,
    params: params,
    data: body,
  });
  return promise;
};

const API_GET_OPPORTUNITIES_OF_LEAD = async (payload) => {
  const { params, body } = payload;

  const promise = axios.post(V2_API_WRAPPER, {
    method: "POST",
    endpoint: V2_ENDPOINTS.GET_OPPORTUNITES_OF_LEAD,
    params: params,
    data: body,
  });
  return promise;
};

const API_GET_OPPORTUNITY_BY_ID = async (opportunityId) => {
  const params = { OpportunityId: opportunityId, getFileURL: true };

  const promise = axios.post(V2_API_WRAPPER, {
    method: "GET",
    endpoint: V2_ENDPOINTS.GET_OPPORTUNITY_BY_ID,
    params: params,
  });
  return promise;
};

const API_GET_TOKEN = async () => {
  const promise = axios.post(V2_API_WRAPPER, {
    method: "GET",
    endpoint: V2_ENDPOINTS.GET_TOKEN,
  });
  return promise;
};

const API_GET_DASHBOARD_REPORT = async (payload) => {
  const promise = axios.post(PORTAL_ELASTIC_SEARCH_API_WRAPPER, {
    method: "POST",
    endpoint: V2_ENDPOINTS.GET_DASHBOARD_REPORT,
    data: payload,
  });
  return promise;
};

const API_CREATE_LEAD_WITH_BULK_UPLOAD = async (payload) => {
  const { params, body } = payload;
  CommonService.afterSessionTimeOut();
  const promise = axios.post(V2_API_WRAPPER, {
    method: "POST",
    endpoint: V2_ENDPOINTS.CREATE_LEAD,
    params: params,
    data: body,
  });
  return promise;
};

export {
  API_LOGIN,
  API_GET_OTP,
  API_RESET_PASSWORD,
  API_FORGOT_PASSWORD,
  API_GET_LEAD_DETAILS_BY_ID,
  API_GET_LEADS_BY_ADVANCED_SEARCH,
  API_GET_OPPORTUNITIES_OF_LEAD,
  API_GET_OPPORTUNITY_BY_ID,
  API_GET_TOKEN,
  API_GET_DASHBOARD_REPORT,
  API_CREATE_LEAD_WITH_BULK_UPLOAD,
};
