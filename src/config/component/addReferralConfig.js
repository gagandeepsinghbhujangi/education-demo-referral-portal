import {
  getLeadIdFromCookie,
  getProspectNameFromCookie,
} from "../../authentication/utility";

const AddReferralConfig = {
  formTitle: "",
  submitButtonLabel: "Add Applicant",
  backToLogin: true,
  formFields: {},
  lsqFormConfig: {
    formId: "d010b522-ab6b-11ec-8121-0af88934a77e",
    lsqFormUrl:
      "https://dhx9mmhpfsala.cloudfront.net/cdn/externalforms/r21/js/lsq.form.js?v=66.1.1.8",
    lsqAppUrl: "",
    lsqApiServiceUrl: "",
    lsqAuthKey:
      "VmhwMTFTRVRzbGJUaUh3Z28rL3pZQTE0cU1LTjVoaGNaYzg5ZGNVVkVrS0lTd3RaaUpKSSt3ZVZTRjREVE1ib04wdmtvLzRLdzJMdlAvaThmNkFub3QrTnV1b1RnUVNyT0pJWnpGeEcxeCtkS0NTUmpwNzBvdGdGRjhOYjdTMy9TSkJaWlg2QlhkMWtJdnQyUVZESkhmTkJPVGJ5TjUxaGMwaUtyYzRzV0JkUHpKWlNVdDhna3p1TlRsOGYyMkNyb2RRQjF0NWlmcUxpcHVZbWVtL2dQdz09",
    injectExtraValues: [
      {
        "d010b522-ab6b-11ec-8121-0af88934a77e__tab1__section2__mx_Referral_Lead__Lead__0":
          getLeadIdFromCookie(),
      },
      {
        "d010b522-ab6b-11ec-8121-0af88934a77e__tab1__section2__mx_Partner_Name__Lead__0":
          getProspectNameFromCookie(),
      },
    ],
  },
};

export default AddReferralConfig;
