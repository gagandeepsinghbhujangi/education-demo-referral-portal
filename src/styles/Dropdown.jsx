import { createGlobalStyle } from "styled-components";

export const DashboardCss = createGlobalStyle`
.menuItemContainer {
    display: flex;
    text-align: center;
  }
  
  .menu {
    border: 1px solid ${({ theme }) => theme.colors.text12};
    width: 155px;
  }
  
  .menuItems {
    word-wrap: break-word;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.text13};
  }
`;
