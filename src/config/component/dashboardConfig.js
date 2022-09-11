import IconAdd from "../../assets/images/icons/add.png";
import IconDownload from "../../assets/images/icons/import.png";
import rewardIcon from "../../assets/images/icons/rewardIcon.png";

const dashboardConfig = {
  dashboardTitle: "My Applicant",
  addBtnText: "Add New Applicant",
  importBtnText: "Import Applicants",
  isReward: true, // To show/hide reward points UI
  point: "Points",
  addIcon: IconAdd,
  importIcon: IconDownload,
  rewardIcon: rewardIcon,
  dashboardButton: true, // To show/hide dashboard button
  // to inject menu items
  stages: [
    {
      title: "All Status",
      value: "",
    },
    {
      title: "Prospect",
      value: "Prospect",
    },
    {
      title: "Application initiated",
      value: "Application initiated",
    },
    {
      title: "Application submitted",
      value: "Application submitted",
    },
    {
      title: "Payment completed",
      value: "Payment completed",
    },
    {
      title: "Enrolled",
      value: "Enrolled",
    },
  ],
  // lead status--
  reportCardKeys: {
    totalLeads: "prospect",
    signedUp: "prospect",
    appInitiated: "application initiated",
    appSubmitted: "application submitted",
    paymentCompleted: "payment completed",
    appEnrolled: "enrolled",
  },
  //To show dynamic all lead status card data 
  bucketArr: [
    "Total Leads",
    "Prospect",
    "Application Initiated",
    "Application Submitted",
    "Payment Completed",
    "Leads Enrolled",
  ],
};
export default dashboardConfig;
