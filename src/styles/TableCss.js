import { createGlobalStyle } from "styled-components";

export const TableCss = createGlobalStyle`
    .tableheader {
        background: ${({ theme }) => theme.table.tableHeadBackground};
        border-left: 1px solid ${({ theme }) => theme.table.tableHeadBorder};
        border-right: 1px solid ${({ theme }) => theme.table.tableHeadBorder};
        border-top: 1px solid ${({ theme }) => theme.table.tableHeadBorder};
        padding: 18px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tableheader h2.tabletitle {
        font-size: 16px;
        letter-spacing: 0px;
        color: ${({ theme }) => theme.colors.text1};
        line-height: 19px;
        margin: 0px;
    }
    .table-options {     
        border: 1px solid ${({ theme }) => theme.colors.third};
        border-radius: 4px;
        opacity: 1;
        font-size: 10px;
        width: 160px;
        height: 32px;
        background: transparent;
        color: ${({ theme }) => theme.colors.third};
        padding: 0px 10px 0px 10px;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .tableheader .tablebuttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tableheader .btn-export {
        border-radius: 4px;
        opacity: 1;
        font-size: 12px;
        height: 32px;
        outline: none;
        padding: 0px 13px;
        cursor: pointer;
        margin-left: 15px;
    }
    .calender-dates,
    .ant-picker {
        border: 1px solid ${({ theme }) => theme.colors.third};
        border-radius: 4px;
        opacity: 1;
        font-size: 10px;
        height: 32px;
        background: transparent;
        color: ${({ theme }) => theme.colors.third};
        padding: 0px 10px 0px 5px;
        outline: none;
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 198px;
        justify-content: space-between;
    }
    
    .ant-space.ant-space-vertical input,
    .ant-space.ant-space-vertical .anticon {
        font-size: 10px;
        background: transparent;
        color: ${({ theme }) => theme.colors.third};
        cursor: pointer;
    }
    
    .ant-space.ant-space-vertical input::placeholder {
        color: ${({ theme }) => theme.colors.third};
        opacity: 1;
    }
    .calender-dates img {
        width: 9px;
    }
    .calender-dates button {
        background: transparent;
        border: 0px;
        outline: none;
    }
    .customTable {
        // width: 71%;
        // margin: 98px 0px 0px 193px;
    }
    .customTableBody {
        font-family:${({ theme }) => theme.font3};
        width: 100%;
    }
    .customTableBody thead tr th {
        text-align: left;
        font-size: 12px;
        color: ${({ theme }) => theme.table.tableHeadText};
        font-weight: 600;
        padding: 3px 0px 3px 21px;
    }
    .customTableBody thead {
        background: ${({ theme }) => theme.table.tableHeadBackground};
        border-left: 1px solid ${({ theme }) => theme.table.tableHeadBorder};
        border-right: 1px solid ${({ theme }) => theme.table.tableHeadBorder};
    }
    .customTableBody tbody tr td {
        color: #505050;
        font-size: 14px;
        height: 60px;
        padding-left: 21px;
    }
    .customTableBody tbody tr {
        background: #ffffff 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;
        box-shadow: -4px 0px 0px 0px #bcd3e9;
        border-bottom: 3px solid #f9fafb;
    }
    .customTableBody tbody tr:nth-child(even) {
        box-shadow: -4px 0px 0px 0px #ebdcf3;
    }
    section.pagination {
        display: flex;
        justify-content: end;
        align-items: center;
        margin: 10px 0px;
    }
    .pagination .go-to-page-main {
        font-size: 12px;
        color: #454545;
        margin-right: 17px;
    }
    .go-to-page-main span.go-to-page:first-child {
        margin-right: 15px;
    }
    .go-to-page-main input[type="number"] {
        width: 40px !important;
        border: 1px solid #cecece;
        border-radius: 2px;
        padding: 2px 7px;
        height: 22px;
    }
    .pagination .page-changer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 17px;
    }
    .pagination .page-changer button {
        border: 1px solid #cecece;
        background: #fff;
        color: #868686;
        border-radius: 2px;
        min-width: 24px;
        height: 22px;
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
    }
    .pg-arrow-btn{
        color: #000 !important;
    }
    .pagination .page-changer span.page-counter {
        font-size: 12px;
        color: #868686;
        margin: 0px 5px;
    }
    .pagination select.select-page {
        border: 1px solid #cecece;
        border-radius: 2px;
        padding: 2px 7px;
        height: 22px;
        // width: 48px;
        text-align: center;
        font-size: 12px;
        color: #868686;
        font-weight: 600;
        background-color: #fff;
    }
    .site-calendar-card {
        width: 300px;
        border: 1px solid #f0f0f0;
        border-radius: 2px;
    }
    [data-theme="dark"] .site-calendar-card {
        border: 1px solid #303030;
    }
    .status-color {
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 1px;
        margin-right: 12px;
    }
    .pageDot{
        width: 5px;
        height: 5px;
        background: #C6C6C6;
        border-radius: 20px;
        margin: 2px;
        display: inline-block;
    }
    .pgBtn{
        margin: 2px;
    }
    .inline-block {
        display:inline-block;
    }
    .autoScroll {
        overflow: auto;
        max-height: 700px;
        width: 100%;
    }
    button.pgBtn.active-page-btn {
        background:${({ theme }) => theme.colors.primary};
        color: #fff;
    }
    .mobile{
        background: ${({ theme }) => theme.table.tableHeadBackground};
        width: 100%;
        display: block;
        .mobileHead{
            padding: 5px 15px 5px;
        }
        .clear{
            margin-left: 45%;
        }
        .tabletitle{
            margin-top: 5px;
            font-size: 14px;
            color: #3C3C3C;
            font-family: ${({ theme }) => theme.font2};
            
        }
        .float-right{
            float: right;
        }
       
        .btn-box .table-options{
            // margin-top: 10px;
        }
        .btn-box{
            display:flex;
            margin-top:12px;
            margin-bottom:12px;
            justify-content: space-between;
        }
        .row {
            display: flex;
          }
          
        .column {
        flex: 50%;
        }
        .card{
            margin-bottom: 5px;
            background: #fff;
            // padding: 11px 167px 11px 14px; /
            padding:  0 12px;
        }
        .card-heading{
            text-align: left;
            font-size: 12px;
            color: ${({ theme }) => theme.table.tableHeadText};
            font-family: ${({ theme }) => theme.font3};
        }
        .card-text{
            text-align: left;
            font-size: 12px;
            font-family: ${({ theme }) => theme.font3};
            word-break: break-all;
        }
        .card-col{
            margin-top: 5px;
        }

    }

    .total {
        background: ${({ theme }) => theme.dashboardsCard.card1.status};
    }
    .singed {
        background: ${({ theme }) => theme.dashboardsCard.card2.status};
    }
    .initiated {
        background: ${({ theme }) => theme.dashboardsCard.card3.status};
    }
    .submitted {
        background: ${({ theme }) => theme.dashboardsCard.card4.status};
    }
    .completed {
        background: ${({ theme }) => theme.dashboardsCard.card5.status};
    }
    .enrolled {
        background: ${({ theme }) => theme.dashboardsCard.card6.status};
    }
    .tr-dynamic-singed {
        box-shadow: -4px 0px 0px 0px ${({ theme }) =>
          theme.dashboardsCard.card2.background} !important;
    }
    .tr-dynamic-initiated {
        box-shadow: -4px 0px 0px 0px ${({ theme }) =>
          theme.dashboardsCard.card3.background} !important;
    }
    .tr-dynamic-submitted {
        box-shadow: -4px 0px 0px 0px ${({ theme }) =>
          theme.dashboardsCard.card4.background} !important;
    }
    .tr-dynamic-completed {
        box-shadow: -4px 0px 0px 0px ${({ theme }) =>
          theme.dashboardsCard.card5.background} !important;
    }
    .tr-dynamic-enrolled {
        box-shadow: -4px 0px 0px 0px ${({ theme }) =>
          theme.dashboardsCard.card6.background} !important;
    }
    @media (max-width: 420px) {
        .calender-dates,
        .ant-picker {
            width: auto;
            max-width: 198px;
        } 
        .mobileHead{
            text-align: center;
        }
        .mobile .tabletitle {
            margin-bottom: 0px;
        }
        .mobile .float-right {
            float: none;
            // margin-top: 10px;
        }
        .mobile .card-text {
            font-size: 9px;
            word-break: break-all;
        }
        .table-options {   
            width: 140px;
        }
    }
`;
