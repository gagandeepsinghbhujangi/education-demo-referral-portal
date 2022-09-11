import { isCookieAuthInfoPresent } from "../authentication/utility";

class CommonService {
  static bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  static generateSampleCSVData = (columnsArr, rowData, fileName) => {
    if (fileName) {
      const columnNamesArray = columnsArr;
      const columnNamesString = columnNamesArray.join(",") + "\n";

      let csvData = columnNamesString;

      rowData.forEach(function (singleRowData) {
        csvData += singleRowData.join(",");
        csvData += "\n";
      });

      let hiddenElement = document.createElement("a");
      hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
      hiddenElement.target = "_blank";

      //Setting Name for CSV File

      hiddenElement.download = fileName;
      hiddenElement.click();
    }
  };

  static passwordScheme = (value) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const result = value.match(passwordRegex) ? true : false;
    return result;
  };

  static getParsedLeadData = (RecordCount, Leads) => {
    let dataArry = [];

    if (parseInt(RecordCount) > 0) {
      Leads &&
        Leads.map((lead) => {
          const { LeadPropertyList } = lead;
          let rowData = {};
          LeadPropertyList &&
            LeadPropertyList.length > 0 &&
            LeadPropertyList.map((field) => {
              rowData[field.Attribute] = field.Value || "-";
            });
          rowData.FullName =
            (rowData.FirstName !== "-" ? rowData.FirstName : "") +
            " " +
            (rowData.LastName !== "-" ? rowData.LastName : "");
          rowData.CreatedOn = this.getFormattedDate(rowData.CreatedOn);
          dataArry.push(rowData);
        });
    }
    return dataArry;
  };

  static splitArrayForBulkUpload = (inputArray, count) => {
    const perChunk = count || 50; // items per chunk

    const result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return result;
  };

  static getFormattedDate(date) {
    const newDate = new Date(date);
    if (newDate) {
      const year = newDate.getFullYear();

      let month = (1 + newDate.getMonth()).toString();
      month = month.length > 1 ? month : "0" + month;

      let day = newDate.getDate().toString();
      day = day.length > 1 ? day : "0" + day;

      return day + "-" + month + "-" + year;
    } else {
      return "";
    }
  }

  static compareIgnoreCase = (a, b) => {
    let aValue = a || "";
    let bValue = b || "";
    let r1 = aValue.toLowerCase();
    let r2 = bValue.toLowerCase();
    if (r1 < r2) {
      return -1;
    }
    if (r1 > r2) {
      return 1;
    }
    return 0;
  };

  static afterSessionTimeOut = () => {
    const isUserSignedIn = isCookieAuthInfoPresent();
    if (!isUserSignedIn) {
      window.location.href = "/";
    }
  };
}

export default CommonService;
