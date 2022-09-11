const PORTAL_SIGN_IN_ENDPOINTS = {
  SIGN_IN: "api/Authentication/Signin",
  REGISTER: "api/Authentication/Register",
  FORGOT_PASSWORD: "api/Authentication/SecureForgotPassword",
  CHANGE_PASSWORD: "api/Settings/ChangePassword",
  SIGN_OUT: "api/Authentication/Signout",
  RESET_PASSWORD: "api/Authentication/ResetPassword",
  OTP_GENERATE: "/api/Form/SendOTP",
  OTP_VERIFY: "/api/Form/VerifyOTP",
  GET_OTP: "/api/Authentication/SigninOTP/Get",
};

const V2_ENDPOINTS = {
  GET_LEAD_BY_ID: "LeadManagement.svc/Leads.GetById",
  GET_LEAD_ACTIVITY: "ProspectActivity.svc/Retrieve",
  CREATE_ACTIVITY: "ProspectActivity.svc/Create",
  UPDATE_ACTIVITY: "ProspectActivity.svc/CustomActivity/Update",
  GET_ACTIVITY_DETAILS_BY_LEAD_ID: "ProspectActivity.svc/Retrieve",
  CREATE_LEAD: "LeadManagement.svc/Lead/Bulk/Create",
  UPDATE_LEAD: "LeadManagement.svc/Lead.Update",
  GET_LEAD_BY_CRITERIA: "LeadManagement.svc/Leads.Get",
  GET_LEADS_BY_ADVANCED_SEARCH:
    "LeadManagement.svc/Leads/Retrieve/BySearchParameter",
  GET_OPPORTUNITES_OF_LEAD: "OpportunityManagement.svc/GetOpportunitiesOfLead",
  GET_OPPORTUNITY_BY_ID: "OpportunityManagement.svc/GetOpportunityDetails",
  GET_TOKEN: "Authentication.svc/UserTokenByAccessKey.Get",
  GET_DASHBOARD_REPORT: "MXElasticSearch/Search",
};

export { PORTAL_SIGN_IN_ENDPOINTS, V2_ENDPOINTS };
