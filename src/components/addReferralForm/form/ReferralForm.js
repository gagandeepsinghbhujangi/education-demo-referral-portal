import { createGlobalStyle } from "styled-components";

export const AddReferralFormCss = createGlobalStyle`
        
        .lsq-form-theme-footer{
            button{
                width: 96%;
            }
        }          
        .lsq-external-form-container .shimmer-header {
            padding: 10px 12px;
            border-bottom: 1px solid #ddd;
        }

        .lsq-external-form-container .shimmer-body {
            padding: 10px 12px;
        }

        .lsq-external-form-container .shimmer-center {
            text-align: center;
            margin: 0 auto;
        }

        .lsq-external-form-container .shimmer-shine {
            background: #f6f7f8;
            background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: placeholderShimmer;
            animation-timing-function: linear;
            -webkit-animation-duration: 1s;
            -webkit-animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-name: webkitplaceholderShimmer;
            -webkit-animation-timing-function: linear;
        }
        .form-group.mx-custom-textfield.mx-custom.lsq-form-field-form-group.lsq-form-label-top {
            margin-bottom: 10px;
        }
        .lsq-external-form-container box {
            height: 32px;
            width: 20%;
            float: right;
        }

        .lsq-external-form-container shimmerinput {
            height: 10px;
            width: 30%;
            display: block;
        }

        .lsq-external-form-container shimmerlabel {
            height: 32px;
            width: 100%;
            display: block;
        }

        .lsq-external-form-container lines {
            height: 10px;
            margin-top: 10px;
            width: 100%;
            display: block;
        }

        @-webkit-keyframes webkitplaceholderShimmer {
            0% {
                background-position: -468px 0;
            }

            100% {
                background-position: 468px 0;
            }
        }

        @keyframes placeholderShimmer {
            0% {
                background-position: -468px 0;
            }

            100% {
                background-position: 468px 0;
            }
        }

        .lsq-external-form-container .shimmer-shine.width50 {
            width: 50%;
        }

        .lsq-external-form-container .shimmer-field {
            padding: 10px 0;
        }

        .ui-selectmenu-menu:not(.ui-selectmenu-open) {
            display: none;
        }
        .lsq-theme-numbered-tab-container , .modal-header{
            display: none !important;
        }
        .lsq-form-global-msg-wrapper.lsq-form-global-msg-wrapper-position-absolute {
            top: 0px !important;
            position: relative !important;
        }
        .modal-header{
            border-bottom: none !important;
        }
        .form-group.mx-custom-textfield.mx-custom.lsq-form-field-form-group.lsq-form-label-top .mx-custom.form-control.lsq-form-field-ctrl-text.width-95{            
            padding: 4px 11px !important;
            color: rgba(0, 0, 0, 0.85);
            font-size: 14px !important;
            line-height: 1.5715;
            background-image: none;
            transition: all 0.3s;
            
            border: 1px solid #b4b4b4 !important;
            border-radius: 4px !important;
            opacity: 1 !important;
            height: 40px !important;
            // font-family: ${({ theme }) => theme.font1} !important;
        }

        .form-group.mx-custom-textfield.mx-custom.lsq-form-field-form-group.lsq-form-label-top .mx-custom.form-control.lsq-form-field-ctrl-text.width-95:focus, .ant-input-focused {
            border-color: #40a9ff !important;
            box-shadow: 0 0 0 2px rgb(24 144 255 / 0%) !important;
            border-right-width: 1px !important !important;
            outline: 0 !important;
        }

        .lsq-form-theme-enabled .lsq-form-section-container .lsq-form-section-body .lsq-form-field-label {
                        
            font-family: ${({ theme }) => theme.font1} !important;
            opacity: 0.7;
            color: ${({ theme }) => theme.colors.text2} !important;
            font-weight: 600;
            font-size: 14px !important;
        }
        @media (max-width: 767px){
            .ant-modal-close-x {
                width: 36px;
                height: 36px;
                font-size: 16px;
                line-height: 0px;
                padding: 0px;
                position: relative !important;
                top: -5px;
                transform: translateY(20px);
            }  
        }
        @media screen and (max-width: 820px) {
            .lsq-form-section-container .lsq-form-section-body .lsq-form-field-item.lsq-form-one-col{
                width: 100% !important;
            }
        }
        .mx-custom.tab-content.lsq-form-tabs-content{
            padding-left: 0px !important;
        }
        .flag-input{
            margin-left: -24px !important;
        }
        
        .lsq-form-action-btn{
            border-color: ${({ theme }) => theme.colors.background3} ;
            background-color: ${({ theme }) => theme.colors.background3};
            font-family: ${({ theme }) => theme.font2} !important;
            justify-content: center;
            font-size: 16px !important;
            font-weight: 500;
            height: 40px;
            border-radius: 6px;
            padding: 0;
          }
          .lsq-form-action-btn:not(.disabled):hover{
            color: ${({ theme }) => theme.colors.text4};
            border-color: ${({ theme }) => theme.colors.third} !important; 
            background-color: green !important; 
        }
          .form-group.mx-custom-textfield.mx-custom.lsq-form-field-form-group.lsq-form-label-top .number-input.mx-custom.form-control.lsq-form-field-ctrl-text.width-95 {
            padding-left: 80px !important;
        }
        .lsq-form-theme-footer{
            padding: 0px !important;
            margin: 0;
        }       
        .lsq-form-theme-enabled.modal-v4.fullscreen.external .modal-footer.lsq-form-theme-footer {
            padding: 0 !important;
        }
        .sign-msg{
            margin-top: 12px;
        }
        .lsq-form-section-container .lsq-form-section-body .lsq-form-field-item{
            margin: 0 !important;
            padding: 0 !important;
        }   
        .mx-custom.tab-content.lsq-form-tabs-content {
            padding-left: 2px !important;
        }
        .mt-15{
            margin-top: 15px
        }
        .AddReferralForm .lsq-form-section-container .select2-container--default span.select2-selection{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px !important;
        }
        .AddReferralForm .lsq-form-theme-enabled.fullscreen.modal-v4 .modal-footer .btn-primary{
            margin: 15px 15px 0 0;
            width: 100%;
        }
        @media screen and (min-width: 768px){
            .ant-modal-content {
                height: auto;
            }
        }
`;
