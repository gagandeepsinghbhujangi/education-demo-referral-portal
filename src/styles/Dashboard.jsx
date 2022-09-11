import { createGlobalStyle } from "styled-components";

export const DashboardCss = createGlobalStyle`   

    .ant-modal-close{
      display:block;
      color:black;
    }
    .ant-modal-close-x{
      font-size: 16px;
      padding-right: 0px;
    }
    
    button, input {
      overflow: visible;
      border: 1px solid #D5D5D5;
    }
  
    .parentDashboardWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100vh - 85px);
    }

    .parentDashboardWrapper img {
      width: calc(100% - 50vw);
    }

    .parentDashboardWrapper .message {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text2};
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
      display: none;
    }

    @media screen and (min-width: 768px) {
      .boxWrapper {
       position: relative;
       box-shadow:unset;
      }

      .buttonWrapper button{
        flex-grow:initial;
      }

      .buttonWrapper {
        .addLead,
          .importLead {
            width: 208px;
            font-size: 16px;
          }
      }

      .buttonWrapper .addLead {
        margin-right: 8px;
      }

     
      
      .buttonWrapper .importLead {
        margin-left: 8px;
        background-color: ${({ theme }) => theme.colors.background3};
        width: 208px;
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
      
      .parentDashboardWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: calc(100vh - 55px);        
        width: 100%;
      }
      .parentDashboardWrapper img {
        width: 312px;
      }
      
      .parentDashboardWrapper .message {
        font-size: 18px;
        color:  ${({ theme }) => theme.colors.text7};
      }
      .ant-modal-content {
        display:box;
        height: 439px;
        width: 762px;
        }

        .leadSquare {
          display: flex;
          justify-content: flex-end;
          margin: 0px;
          padding: 884px 40px 42px 16px;
        }
        .leadSquare img {
          width: 190px;
          height: 20px;
        }
    
    }
  `;
