import { createGlobalStyle } from "styled-components";

export const AddReferralFormCss = createGlobalStyle`
  .parentWrapper{
    display: block;
    padding: 0 0 12px 12px;
  }
  .ant-modal-title{
    color: ${({ theme }) => theme.colors.text2};
    font-weight: bold;
    font-size: 16px
  }
  
  .lsq-form-action-btn{
    border-color: ${({ theme }) => theme.colors.background3} ;
    background-color: ${({ theme }) => theme.colors.background3};
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    border-radius: 6px;
    padding: 0;
  }
  .SignUpForm .lsq-form-section-container .select2-container--default span.select2-selection{
    height: 40px !important;
    background-color: #F2F2F2 !important;
    border: 0 !important;
  }
  .SignUpForm .form-group.mx-custom-textfield.mx-custom.lsq-form-field-form-group.lsq-form-label-top .mx-custom.form-control.lsq-form-field-ctrl-text.width-95{
    background-color: #F2F2F2 !important;
    border: 0 !important;
    
  }
  .SignUpForm  .form-group.number-input.mx-custom.form-control.lsq-form-field-ctrl-text.width-95{
    padding-left: 80px !important;
  }
  span.select2-dropdown-clear-value{
    margin: 10px;
    padding-left: 5px;
  }
  span.select2-selection__arrow{
    margin: 10px;
    padding-right: 20px;
  }
  .SignUpForm .lsq-form-theme-enabled.fullscreen.modal-v4 .modal-footer .btn-primary{
    margin-top: 15px !important;
    margin-right: 15px !important;
  }
`;
