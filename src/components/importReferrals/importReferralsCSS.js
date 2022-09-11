import { createGlobalStyle } from "styled-components";

export const ImportReferralsCss = createGlobalStyle`

    .appWrapper {
        min-height: calc(100vh - 140px) !important;
    }
    body{
        height: unset !important;
        background: #F7F7F7; 
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    .upload-file{
    }
    .container {
        // width: 1158px;
        padding: 0 5%;
        margin: 100px auto;
    }
    .importIcon{
        padding-bottom: 5px;
        margin-right: 5px;
    }
    .title-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title-section h1{
        font-size: 20px;
        color: #454F5B;
        font-weight: 600;
        margin: 0;
    }
    .title-section a{ 
        color: #5C5C5C;
        font-size: 16px;
        text-decoration: none;	
    }
    .title-section a:hover {
        color: #403f3f;
    }
    
    /* Upload Section */
    .upload-section {
        display: flex;
        justify-content: space-between;
        margin-top: 11px;
    }
    .upload-section .upload-box {
        width: 62.5%;
        padding: 20px 30px;
        background: #fff;
        border-radius: 4px;
    }
    .upload-section .upload-info {
        width: 36.5%;
        background: #fff;
        border-radius: 4px;
        padding-bottom: 30px;
    }
    
    .custom-file {
        position: relative;
        display: flex;
        width: 100%;
        height: 80px;
        margin-bottom: 12px;
        justify-content: space-between;
    }
    .custom-file-input {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 80px;
        margin: 0;
        opacity: 0;
        cursor: pointer;
    }	
    .custom-file-label {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0px;
        left: 0;
        z-index: 1;
        height: 80px;
        padding: 0.7rem 0.75rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: 1px dashed #939393;
        border-radius: 0.25rem;
        text-align: center;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.third} !important;
    }
    .custom-file-button {
        display: block;
        height: 40px;
        font-size: 14px;
        padding: 0.7rem 0.75rem;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.primary};
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
        width: 100%;
        font-family: ${({ theme }) => theme.font2};
        margin-top: 12px;
    }    
    .upload-box label{
        font-size: 16px;
        color: #2B2B2B;
        margin-bottom: 7px;
        display: block;
        font-family: ${({ theme }) => theme.font2};
    }
    .uploaded-file {
        background: #FAFAFA 0% 0% no-repeat padding-box;
        border: 1px solid #F2F2F2;
        border-radius: 4px;
        padding: 6px 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .upload-file-name {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.third};
        font-family: ${({ theme }) => theme.font2};
    }
    .upload-file-size {
        font-size: 14px;
        color: #2B2B2B;
    }
    .upload-file-size span {
        margin-left: 15px;
    }
    .upload-info h3 {
        margin: 0px;
        font-size: 16px;
        font-weight: normal;
        padding: 9px 22px;
        border-bottom: 1px solid #f0f0f0;
        font-family: ${({ theme }) => theme.font2};
    }
    .upload-info .info-content {
        padding-left: 5px;
        padding-top: 15px;
    }
    .upload-info .info-content ul{
        margin: 0px;
    }
    .upload-info .info-content ul li{
        margin-bottom: 11px;
        color: #7B7B7B;
        font-size: 14px;
    }
    .lg-title, .ant-collapse-header{
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primary} !important;
        margin-top: 10px;
        padding: 16px 40px;
        background: #fff;
        border: none !important;
        padding-left: 30px !important   ;
    }
    .anticon.anticon-right.ant-collapse-arrow {
        font-size: 17px !important;
    }
    .leads-section h3 {
        font-size: 16px;
        color: #6E6E6F;
        font-weight: 600;
        margin: 0px 0px 7px;
        font-family: ${({ theme }) => theme.font3};
    }
    .leads-section{
        margin-top: 15px;
    }
    .leads-section .tab-section ul {
        padding: 0px;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    margin: 0px;
    }
    .leads-section .tab-section ul li {
        font-size: 14px;
        background: #fff;
        padding: 14px 20px;
        margin-right: 5px;
        color: #6E6E6F;
    }
    .leads-section .tab-section ul li.fail.active {
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid ${({ theme }) => theme.colors.error};
        color: ${({ theme }) => theme.colors.error};
    }
    .leads-section .tab-section ul li.success.active {
        box-shadow: 0px 3px 6px #00000029;
        border: 1px solid ${({ theme }) => theme.colors.success};
        color: ${({ theme }) => theme.colors.success};
    }
    button.ant-btn.ant-btn-default.btn-primary.custom-file-button.disabled {
        background: #f5c7be !important;
        border-color: #f3cec6 !important;
        color: #ffffff !important;
    }
    span.anticon.anticon-delete {
        color: #9b9696;
    }
    // table
    .w-210{
        width: 210px;
    }
    .content-table-scroll{
        // max-height: 520px;
        overflow: auto;
    }
    .leads-section table.parent-table {
        width: 100%;
        text-align: left;
        border: 1px solid #D1D1D1;
        table-layout: fixed;
    }
    .leads-section table.inner-table {
        width: 100%;
    }
    .leads-section table.inner-table th {
        font-size: 14px;
        color: #4B4B4B;
        font-weight: 600;
        padding: 15px 24px;
        border-bottom: 1px solid #ddd;
        background: #fff;
    }
    .leads-section table.inner-table tr td{
        font-size: 14px;
        color: #505050;
        font-weight: normal;
        padding: 15px 24px;
        min-width: 192px;
    }
    .leads-section table.inner-table tbody td a{
        color: #E87171;
        text-decoration: none;
    }
    .leads-section table.inner-table.content-table tr:nth-of-type(odd) {
        background-color: #f8f8f8;
    }
    .leads-section table.inner-table.content-table tr:nth-of-type(even) {
        background-color: #fff;
    }

    .anticon.anticon-left{
        font-size: 14px;
	}
    .ant-collapse.ant-collapse-icon-position-left, .ant-collapse > .ant-collapse-item{
		border: unset !important;
	}
    .ant-collapse-content.ant-collapse-content-active{
        border-top: 1px solid #d9d9d9 !important;
    }
    .ant-collapse-content-box {
        padding-left: 30px !important;
    }
    .info-content li{
        color: #7B7B7B;
    }
    .sample-text{
        text-align: left;
        font-family: ${({ theme }) => theme.font1};
        font-size: 13px;
        letter-spacing: 0px;
        color: #2B2B2B;
        display: inline-block;
    }
    .downloadSample{
        display: inline-block;
        float: left;
        font-size: 14px;
        font: normal normal 500 14px/18px ${({ theme }) => theme.font2};
        color: ${({ theme }) => theme.colors.third};
        margin-left: 40px;
    }
    span.anticon.anticon-download{
        font-size: 16px;
    }
    header, .row {
        display: flex;   
    }
    .col {
        flex: 1;        
    }
    .sample-table{
        header{
            background: #E0E0E0;
        }
        .col{
            font-size: 14px;
            text-align: left;
            font-family: ${({ theme }) => theme.font3};
            letter-spacing: 0px;
            color: #525252;
            opacity: 1;
            padding: 10px;
            border: 1px solid #D9D9D9;
        }
    } 
    .success{
        color: #1E7E07 !important;
    }
    .scroll-table {
        overflow:scroll;
        height:100px;
    } 

    .text-center.no-data {
        font-size: 14px;
        color: #505050;
        font-weight: normal;
        padding: 15px 24px;
        min-width: 192px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto; 
        border: 1px solid #D1D1D1;
      }
      .grid-container {
        overflow-x: auto;
    }
    .grid-item.head {
        font-size: 14px;
        color: rgb(75, 75, 75);
        font-weight: 600;
        padding: 15px 24px;
        border-bottom: 1px solid rgb(221, 221, 221);
        background: rgb(255, 255, 255);
        word-break: break-all;
    }
    .grid-item.content {
        font-size: 14px;
        color: rgb(80, 80, 80);
        font-weight: normal;
        padding: 15px 24px;
        min-width: 192px;
        word-break: break-all;
    }
    .bg2{
        background: #fff;
    }
    /*Responsive*/
    
    @media (max-width: 640px) {
        .mobile-table.hidden-desktop {
            max-height: 250px;
            overflow-y: auto;
        }
        .hidden-mobile{
            display: none;
        }
        .title-section {
            padding: 0px 10px;
        }
        .container {
            width: 100%;
            margin: 20px 0px 70px;
        }
        .upload-section {
            flex-direction: column;
        }
        .upload-section .upload-box {
            width: 100%;
            padding: 20px 15px;
            text-align: center;
            margin-bottom: 5px;
        }
        .custom-file-label {
            width: 100%;
        }
        .custom-file {
            height: auto;
            flex-direction: column;
        }
        .custom-file-buttpm {
            height: 42px;
            padding: 0.5rem 0.75rem;
            margin: 0px auto;
        }
        .upload-section .upload-info {
            width: 100%;
        }
        .lg-title, .ant-collapse .ant-collapse-icon-position-left{
            padding: 0px 0px;
        }
        .ant-collapse > .ant-collapse-item {
            border-bottom: unset !important;
        }
        .ant-collapse{
            border: unset !important;
        }
        .leads-section h3 {
            margin: 10px 25px 15px;
        }
        .table-content-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex: 1;
            align-content: center;
            align-items: flex-start;
            background: #fff;
            margin: 10px 0px;
            padding: 12px 10px;
        }
        .table-content-row > div {
            width: 50%;
        }
        .table-content-row > div span {
            font-size: 13px;
            color: ${({ theme }) => theme.colors.third};
        }
        .table-content-row > div p {
            font-size: 14px;
            margin: 0px;
            line-height: 1;
            word-wrap: break-word;
        }
        .table-content-row > div {
            width: 50%;
            margin-bottom: 10px;
        }
        .leads-section .tab-section {
            margin: 0px 10px;
            text-align: center;
        }
        .table-content-row > div p a {
            color: #E87171;
            text-decoration: none;
        }
       
         
        .footermobile {
            padding: 10px;
            border-top: 1px solid #dcdcdc;
            position: fixed;
            bottom: 0px;
            width: 100%;
            background: #fff;
        }
        .footermobile .backbuttonmobile {
            width: 100%;
            background: ${({ theme }) => theme.colors.primary};
            border: 0px;
            font-size: 16px;
            color: #fff;
            border-radius: 4px;
            height: 42px;
            font-family: ${({ theme }) => theme.font2};
        }

        .custom-file-button {
            margin: 15px auto;
            // width: 168px;
        }
    }
        @media (min-width: 641px) {
            .hidden-desktop{
                display: none;
            }
        }
`;
