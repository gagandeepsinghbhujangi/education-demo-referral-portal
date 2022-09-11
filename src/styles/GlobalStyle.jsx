import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        // background: ${({ theme }) => theme.colors.bodyBackground};
    }
    .clr-primary {
        color:${({ theme }) => theme.colors.primary};
    }
    .clr-secondary {
        color:${({ theme }) => theme.colors.secondary};
    }
    .clr-third {
        color:${({ theme }) => theme.colors.third};
    }
    .clr-forth {
        color:${({ theme }) => theme.colors.forth};
    }
    .clr-fifth {
        color:${({ theme }) => theme.colors.fifth};
    }
    .text1{
        color:${({ theme }) => theme.colors.text1};
    }
    .text2{
        color:${({ theme }) => theme.colors.text2};
    }
    .text3{
        color:${({ theme }) => theme.colors.text3};
    }
    .text4{
        color:${({ theme }) => theme.colors.text4};
    }
    .text5{
        color:${({ theme }) => theme.colors.text5};
    }
    .font1{
        font-family:${({ theme }) => theme.font1};
    }
    .font2{
        font-family:${({ theme }) => theme.font2};
    }
    .font3{
        font-family:${({ theme }) => theme.font3};
    }
    a {
        color:${({ theme }) => theme.colors.primary};
    }
    a:hover {
        color: ${({ theme }) => theme.colors.secondary}; 
    }
    .btn-primary{
        color: ${({ theme }) => theme.colors.text4} !important; 
        border-color: ${({ theme }) => theme.colors.primary} !important;  
        background:${({ theme }) => theme.colors.primary} !important;  
    }
    .btn-primary:hover{
        color: ${({ theme }) => theme.colors.primary} !important; 
        border-color: ${({ theme }) => theme.colors.primary} !important; 
        background:${({ theme }) => theme.colors.text4} !important; 
    }
    .ant-btn-primary , .btn-primary{
        color: ${({ theme }) => theme.colors.text4};
        border-color: ${({ theme }) => theme.colors.primary}; 
        background:${({ theme }) => theme.colors.primary}; 
    }
    .ant-btn-primary:hover, .ant-btn-primary:focus {
        color: ${({ theme }) => theme.colors.text4};
        border-color: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.secondary};
    }
    .ant-btn-primary:active {
        color: ${({ theme }) => theme.colors.text4};
        border-color: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.secondary};
    }
    .ant-btn-secondary {
        color: ${({ theme }) => theme.colors.text4};
        border-color: ${({ theme }) => theme.colors.secondary}; 
        background:${({ theme }) => theme.colors.secondary}; 
    }
    .ant-btn-secondary:hover, .ant-btn-secondary:focus {
        color: ${({ theme }) => theme.colors.text4};
        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primary};
    }
    .ant-btn-secondary:active {
        color: ${({ theme }) => theme.colors.text4};
        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.primary};
    }
    .ant-btn-dangerous{
        color: ${({ theme }) => theme.colors.primary} !important;
        border-color: ${({ theme }) => theme.colors.primary} !important;
        background: ${({ theme }) => theme.colors.text4}!important;
    }
    .ant-btn-dangerous:hover, .ant-btn-dangerous:focus {
        background: ${({ theme }) => theme.colors.primary} !important;
        border-color: ${({ theme }) => theme.colors.primary} !important;
        color: ${({ theme }) => theme.colors.text4} !important;
    }
    .success{
        color: ${({ theme }) => theme.colors.success} !important;
    }
    .fail, .error, .clr-error{
        color: ${({ theme }) => theme.colors.error} !important;
    }
    .alert {
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;   
        width: 100%;
    }
    .alert-success {
        color: ${({ theme }) => theme.colors.success} !important;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }
    .alert-error {
        color: ${({ theme }) => theme.colors.error} !important;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
    .appWrapper{
        min-height: calc(100vh - 45px);
    }
    span.field-validation-valid.in, .field-validation-valid {
        font-size: 11px !important;
        font-family: ${({ theme }) => theme.font1} !important;
    }
`;
