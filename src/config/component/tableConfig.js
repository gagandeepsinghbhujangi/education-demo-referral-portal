const tableConfig = {
  Columns: [
    {
      Header: "Name",
      accessor: "FullName",
    },
    {
      Header: "Phone",
      accessor: "Mobile",
    },
    {
      Header: "Email",
      accessor: "EmailAddress",
    },
    {
      Header: "Lead added on",
      accessor: "CreatedOn",
    },
    {
      Header: "Course",
      accessor: "mx_Interested_Course",
    },
    {
      Header: "Applicant Status",
      accessor: "mx_Application_Stage",
    },
  ],
  Filters: {
    date: true,
    status: true,
  },
  Setting: {
    Sorting: true,
    Export: false,
    Pagination: {
      Size: 10,
      Enable: true,
    },
    SearchLabel: true,
  },
};

export default tableConfig;
