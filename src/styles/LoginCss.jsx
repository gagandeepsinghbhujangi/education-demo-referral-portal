import { createGlobalStyle } from "styled-components";

export const LoginCss = createGlobalStyle`
    .parentWrapper{
        height:100vh;
        flex-direction:column;
    }    
    .preLoginImage{
         width:163px;
         height:146px;
    }   
    .login-form {
        width: 80%;
    }
    .SignUpForm{
        width: 100%;
        margin-top: 15px;
        position: relative;
        z-index: 1
    }
    .SignUpForm .formParentWrapper{
        width: 80%;
    }
    .loginForm,
    .forgotPasswordForm,
    .SignUpForm,
    .resetPasswordForm {        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;        
    }
    .login-img {
        // flex-grow: 3;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        width:100%;
        margin-top: 80px;
    }
    .loginLabel {
        text-align: left;
        font-size: 26px;
        letter-spacing: 0px;
        color: ${({ theme }) => theme.colors.text1};
        opacity: 1;
        margin-bottom: 14px;
        font-family: ${({ theme }) => theme.font2};
    }
    .input {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #b4b4b4;
        border-radius: 4px;
        opacity: 1;
        height: 40px;
    }
    .ant-form-item-label {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: ${({ theme }) => theme.colors.text1};
        opacity: 0.7;
    }
    .forgotPassword {
        margin-bottom: 29px;
    }
    .forgot-password {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0px;
        color: ${({ theme }) => theme.colors.primary};
        opacity: 1;
    }
    .login-btn {
        height: 40px;
        font-size: 14px;
        letter-spacing: 0px;
        color: ${({ theme }) => theme.colors.text4};
        background: ${({ theme }) =>
          theme.colors.primary} 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;
    }
    .sign-msg {
        text-align: left;
        font-size: 16px;
        letter-spacing: 0px;
        opacity: 1;
        margin-bottom:15px;
    }
    .ant-form-item-label
        > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
        display: none;
    }
    .subLabel {
        text-align: center;
        font-size: 16px;
        letter-spacing: 0px;
        color: ${({ theme }) => theme.colors.text2};
        width: 100%;
        padding: 0 12px
    }   
    .mt-40 {
        margin-top: 40px;
    }
    .mt-10 {
        margin-top: 10px;
    }
    .ant-form-item-label label {
        color: ${({ theme }) => theme.colors.text1};
        font-size: 14px;
        font-family: ${({ theme }) => theme.font2};
    }
    .mb-none {
        margin-bottom: 0px;
    }
    .sign-msg img {
        padding-right: 7px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .ant-input input{
        width: 100%;
    }
    .lsq-form-theme-enabled.fullscreen.modal-v4 .modal-footer .btn-primary{
        padding: 0 !important;
        margin: 15px 15px 0 0 !important;
    }
    @media screen and (min-width: 768px) {
        .preLoginImage{
            width:549px;
            height:496px;
       }   
       .parentWrapper{
           flex-direction: row;
       }
       .login-img{
            justify-content: center;
            margin-top: 0;
            width:60%;
       }
       .loginForm,
        .forgotPasswordForm,
        .SignUpForm,
        .resetPasswordForm {
           padding: 0;
           align-items: flex-start;
       }
       .login-form {
            width: 370px;
        } 
        .subLabel{
            width: 370px;
            padding: 0;
            text-align: left;
        }
    }
    @media screen and (min-width: 820px) {
        .SignUpForm{
            width: 40%;
            margin-top: 0px;
        }
        .sign-msg{
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 1200px) {
        .SignUpForm .formParentWrapper{
            width: 70%;
        }
    }
`;
