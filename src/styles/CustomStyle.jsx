import { createGlobalStyle } from "styled-components";

export const CustomStyle = createGlobalStyle`
    * {
        font-family: ${({ theme }) => theme.font1};
    }
    a {
      cursor: pointer;
    }
    .mb-5 {
        margin-bottom: 5px !important;
    }    
    .flex-container {
        display: flex;
    }
    .flex-center{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input{
      font-family: ${({ theme }) => theme.font1} !important;
      font-size: 14px;
    }
    .topHeader {
        top: 0px;
        left: -3px;
        height: 62px;
        background: ${({ theme }) =>
          theme.colors.hederBackground} 0% 0% no-repeat padding-box;
        opacity: 1;
      }
      .top-header-logo {
        top: 0px;
        margin-left: 134px;
        width: 88px;
        height: 61px;
        opacity: 1;
        color: aliceblue;
      }
      .ant-form-item-explain-error{
        color: ${({ theme }) => theme.colors.primary};
      }
      .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper, .ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper, .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover, .ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }
      .ant-row.ant-form-item {
        margin-bottom: 18px !important;
    }
    .ant-row.ant-form-item.mb-5.ant-form-item-has-success{
      margin-bottom: 7px !important;
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .mb-1{
      margin-bottom: 5px;
    }
    .ml-1{
      margin-left: 5px;
    }
    .ml-2{
      margin-left: 10px;
    }
    .mt-1{
      margin-top: 5px
    }
    .mt-2{
      margin-top: 10px;
    }
    .ant-col.ant-form-item-label{
      padding: 0 0 4px !important;
    }
    span.anticon.anticon-sort-ascending, span.anticon.anticon-sort-descending{
      padding: 5px;
    font-size: 16px;
    }
    .style_menuItems__c8EvF{
      padding: 2px 16px !important;
    }
    .style_menu__cj2aM{
      width: auto !important;
    }
    .vertical-line{
      width: 1px; 
      background-color: ${({ theme }) => theme.colors.fifth}; 
      height: 30px;
      float: left; 
      margin-left: 15px;
      margin-right: 15px;
    }
    .float-left{
      float: left;
    }
    .form-group.mx-custom-textfield.mx-custom.lsq-form-field-form-group.lsq-form-label-top .mx-custom.form-control.lsq-form-field-ctrl-text.width-95:focus, .ant-input-focused {
      border-color: #40a9ff !important;
      box-shadow: 0 0 0 2px rgb(24 144 255 / 0%) !important
      border-right-width: 1px !important !important;
      outline: 0 !important;
    }
    .infinite-scroll-component-bottom{
      margin-bottom: 70px;
    }
    .footer{
      // padding: 10px 5% 10px 5%;
      font-size: 12px;
      color: #607D8B;
      padding: 10px 5%;
    }
    .footer img{
      width: 118px;
      height: 20px;
      margin-left: 5px;

      }
      .text-center{
        text-align: center;
      }
      @media (max-width: 767px) {
        .footer{
          padding: 10px 5%;
        }
        .ant-dropdown-menu {
          margin: 20px 0px 0px;
        }
        .ant-modal-close-x {
            width: 36px;
            height: 36px;
            font-size: 16px;
            line-height: 0px;
            padding: 0px;
            position: relative !important;
            top: -5px;
        }
      }
`;
