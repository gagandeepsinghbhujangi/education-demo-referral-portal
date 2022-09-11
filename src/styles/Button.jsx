import { createGlobalStyle } from "styled-components";

export const ButtonCss = createGlobalStyle`
.baseButton {
    padding: 10px 19px;
    border-radius: 4px;
    min-height: 34px;
    height: auto;
    width: 100%;
    font-size: 14px;
    cursor: pointer;
}

.baseButtonStyles {
    color:${({ theme }) => theme.colors.text5};
    background-color:${({ theme }) => theme.colors.background3};
    border: 1px solid${({ theme }) => theme.colors.background3};
}

.baseLinkButton {
    color:${({ theme }) => theme.colors.background2};
    background-color: none;
    background: none;
    border: none;
}
`;
