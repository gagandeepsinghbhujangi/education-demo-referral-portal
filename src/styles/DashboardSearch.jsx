import { createGlobalStyle } from "styled-components";

export const DashboardSearchCss = createGlobalStyle`
    .parentContentWrapper{
      padding: 0px 5%;
      height: 100%;
      margin-top: 110px;
    }
    .customTable thead tr{
      height: 50px
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
    
    .parentSearchWrapper {
      display: flex;
      justify-content: center;  
      flex-direction: column;
      margin-bottom: 12px;
    }
    .customTable{
      margin-top : 0 !important;
    }  
    .parentSearchWrapper h2{
      color: ${({ theme }) => theme.colors.primary};  
      font-weight: 600;
      font-size: 16px;
      display:flex;
    }  
    .leadSquare {
      display: flex;
      justify-content: flex-end;
      margin: 40px;
    }
    .leadSquare img {
      width: 190px;
      height: 20px;
    }

    @media screen and (min-width: 820px) {
      .parentSearchWrapper {
        display: flex;
        justify-content: center;  
        flex-direction: column;
      }
    }
    .parentDashboardWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100vh - 200px);        
      width: 100%;
    }
    .parentDashboardWrapper img {
      width: 312px;
    }
    
    .parentDashboardWrapper .message {
      font-size: 26px;
      color:  ${({ theme }) => theme.colors.text7};
    }
`;
