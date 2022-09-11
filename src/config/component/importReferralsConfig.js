import {
  getLeadIdFromCookie,
  getProspectNameFromCookie,
} from "../../authentication/utility";

const importReferralsConfig = {
  pageTitle: "Import Applicants",
  backToPageLabel: "Back",
  uploadFile: {
    title: "Upload CSV file here",
    uploadButtonLabel: "Import CSV File",
    browseButtonLabel: "Browse file",
    maxFileSizeAllowed: 1024,
    maxRowsAllowed: 300,
    injectExtraValues: [
      {
        mx_Referral_Lead: getLeadIdFromCookie(),
      },
      {
        mx_Partner_Name: getProspectNameFromCookie(),
      },
    ],
  },
  mandatoryColumnNameInCsv: ["FirstName", "Mobile", "EmailAddress"], //this column should be present in Sheet
  noEmptyFieldInColumns: ["FirstName", "Mobile", "EmailAddress"], //Disabled empty fields in column
  additionalColumnInCsv: [
    {
      Attribute: "mx_Application_Stage",
      Value: "Prospect",
    },
  ],
  instructions: [
    "You can upload files only <strong>CSV format</strong>.",
    "Maximum <strong>300 rows</strong> are allowed.",
    "Maximum file size allowed is <strong>1024 KB</strong>.",
    "Supports CSV file with <strong>comma separated</strong> values for Course.",
    "The format of your CSV is important. Please Use our sample CSV.",
    "First Name, Mobile, and Email Address are mandatory fields in the CSV file.",
  ],
  sampleFormat: {
    title: "What should be the Format of CSV?",
    message:
      "The format of your CSV is important. Please arrange your CSV file to match the column headers shown below and then save the file as CSV",
    downloadButtonLabel: "Download Sample CSV",
    tableData: {
      tableHead: [
        "FirstName",
        "LastName",
        "Mobile",
        "EmailAddress",
        "mx_Interested_Course",
        "Campus",
      ],
      tableBody: [
        [
          "PS 1",
          "Sample 1",
          "9001112221",
          "lsqTest1@gmail.com",
          "Art and Science",
          "05-01-2022	",
        ],
        [
          "PS 2",
          "Sample 2",
          "9001112222",
          "lsqTest2@gmail.com",
          "Art and Science",
          "05-01-2022	",
        ],
        [
          "PS 3",
          "Sample 3",
          "9001112223",
          "lsqTest3@gmail.com",
          "Art and Science",
          "05-01-2022	",
        ],
        [
          "PS 4",
          "Sample 4",
          "9001112224",
          "lsqTest4@gmail.com",
          "Art and Science",
          "05-01-2022	",
        ],
        [
          "PS 5",
          "Sample 5",
          "9001112225",
          "lsqTest5@gmail.com",
          "-",
          "05-01-2022	",
        ],
      ],
      sampleFileName: "sampleFile.csv",
    },
  },
  tableConfig: {
    columns: [
      {
        header: "First Name	",
        accessor: "FirstName",
      },
      {
        header: "Mobile No",
        accessor: "Mobile",
      },
      {
        header: "Email",
        accessor: "EmailAddress",
      },
      // {
      //   header: "Lead added on",
      //   accessor: "Campus",
      // },
      {
        header: "Course",
        accessor: "mx_Interested_Course",
      },
      {
        header: "Status",
        accessor: "Status",
      },
    ],
  },
};

export default importReferralsConfig;
