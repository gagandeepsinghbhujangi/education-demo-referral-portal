import { createGlobalStyle } from "styled-components";

export const MyRefferalCss = createGlobalStyle`
.ant-modal-body{
  padding-bottom: 25px; 
 }
  .parentContentWrapper{
    padding:80px 5% 0;
  }
  .sign-msg {
    text-align: left;
    font-size: 16px;
    letter-spacing: 0px;
    opacity: 1;
  }
  .sign-msg img {
    padding-right: 7px;
  }
  .ant-modal-close{
    display:block;
    color:black;
  }
  .addReferralFormWrapper .ant-modal-close-x{
    font-size: 16px;
    padding-right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-10px, 14px);
  }
  .titleWrapper{
    padding:55px;
    display: none;
    justify-content: space-between;
  }
  span.anticon.anticon-close-circle svg {
    margin-right: -3px !important;
    font-size: 13px !important;
  }
  .titleWrapper h2{
    color: ${({ theme }) => theme.colors.text14};
    font-weight: 600;
    position: relative;

    &:after{
      content: "";    
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.5em;
      border-top: 1px solid #FE8134;   
      top: 40px; 
    }
  }

  .change{
    display: flex;
    overflow: auto;
    width: 549px;
  }
  .ant-card-body{
    padding: 0;
  }
  
  .boxes {
    margin-bottom: 0px;
    border: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
  .tableContent {
    background-color: #f5faff;
  }
  .title {
    color: #3c3c3c;
    font: normal normal 600 19px/23px Montserrat;
    font-weight: 600;
  }
  .horizontalLine {
    width: 127px;
    height: 1px;
    background-color: #fe8134;
  }
  .referral{
    display: block;
  }
  .referralsIcon {
    margin-right: 15px;
  }
  .referralContent {
    color: black;
    font-size: 12px;
    font-weight: 600;
    margin-top: -5px;
  }
  .referralCount {
    color: forestgreen;
    width: 100%;
    display: flex;
    font-size: 22px;
    font-weight: 600;
  }
  
  .gridStyle {
    opacity: 93%;
    background-color: #d0d6ff;
    margin-right: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 15.6%;
    height: 100px;
    border-radius: 4px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: flex-start;
    padding: 0px 5px 0px 10px;
}
.boxes .gridStyle:last-child {
  margin-right: 0px;
}
  .parentReferralWrapper {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .boxWrapper {
    width:100%;
    position: fixed;
    padding: 15px 5%;
    left: 0;
    bottom: 0;
    box-shadow: 0px 1px 2px #aaa;
    background: ${({ theme }) => theme.colors.bodyBackground};
}
  }
  
  .buttonWrapper {
    display: flex;
    justify-content: center;
  }

  .buttonWrapper button{
    flex-grow:1;
  }
  
  .buttonWrapper .addLead {
    margin-right: 5px;
  }
  
  .buttonWrapper .importLead {
    margin-left: 5px;
  }
  .buttonWrapper .addLead:hover {
    color: #ffffff;
    border-color: #ff5a53bf;
    background: #ff5a53bf;
  }
  
  .buttonWrapper .importLead:hover {
    color: #ffffff;
    border-color: #ff5a53bf;
    background: #ff5a53bf;
  }

  
  .buttonWrapper {
    .addLead,
    .importLead {
      border-color: ${({ theme }) => theme.colors.background3} ;
      background-color: ${({ theme }) => theme.colors.background3};
      justify-content: center;
      font-size: 13px;
      font-weight: 500;
      height: 40px;
      border-radius: 6px;
      padding: 0;
      width: 208px;
    }
  }
  
  .buttonWrapper .addLead img,
  .importLead img {
    margin-right: 8px;
  }
  
  .leadSquare {
    display: flex;
    justify-content: flex-end;
  }
  .leadSquare img {
    width: 190px;
    height: 20px;
  }
  
  .flag-input{
    margin-left: -24px !important;
  }
  .ant-modal-content {
    height: 100%;
    width: 100%;
    }   
    .footer{
      display: none;
    }
  
  @media screen and (min-width: 820px) {
    
    .addReferralFormWrapper .ant-modal-close-x{
      transform: translate(-10px, 0px);
    }
    
    .footer{
      display: block;
    }    
    .boxWrapper {
        display:none;
    }
    .parentContentWrapper{
      padding-top: 110px;
    }
    .titleWrapper{
      justify-content: space-between;
      display:flex;
      padding:0px 0px 0px 0px;
    }
    .parentReferralWrapper {
      margin-top:24px;
      margin-bottom: 35px;
    }
    .change{
      overflow-x: auto;
      display: flex;
      width: 100%;
    }
    .ant-modal-content {
      // height: 439px;
      width: 762px;
    }
  }
  
  @media (max-width: 1100px) {
    .ant-picker-panel-container .ant-picker-panels {
      max-width: 300px;
      overflow: auto;
  }
    .boxes {
      margin-bottom: 10px;
    }
    .gridStyle {
      min-width: 184px;
    }
  }
`;
