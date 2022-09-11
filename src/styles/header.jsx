import { createGlobalStyle } from "styled-components";

export const HeaderCss = createGlobalStyle`

.ant-modal-body{
  padding: 12px;
}
.ant-modal-close{
  display:block;
  color:black;
}
// .ant-modal-close-x{
//   font-size: 24px;  
//   padding-right: 67px;
// }
.mobileTopSearch{
    max-width: 100% !important;

   .searchContent{
      width: 90%;
    }
   .ant-modal-close-x{
    top: 20px;
   } 
   .search-icon-click {
    padding: 5px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text10};
    font-weight: 700;
   }
   .ant-modal-body{
    padding-bottom: 15px;
   }
}
.popUpSearch{
  // top:70px;
  // left:0;
  // height:79px;
  // width:100%;
  // background:white;
  // z-index:999;
  // position:fixed;
  // display:flex;
  // align-items:center;
  // justify-content: center;
  color: ${({ theme }) => theme.colors.text10};
}
.searchContent {
  height: 32px;
  width: 316px;
  border: 1px solid  ${({ theme }) => theme.colors.text15};
  border-radius: 4px;
  padding: 10px;
}
.searchContent::placeholder {
  color: ${({ theme }) => theme.colors.text10};  
}
.ant-modal-close{
  display: none;
}
.searchIcon {
  background: url("../assets/images/icons/searchIcon.png") no-repeat 322px
  10px;
  background-size: 25px 25px;
  background-position: auto auto;
}

input:focus {
  outline:none;
  color:black;
}

.mobileSearch {
    height: 16px;
    width: 16px;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .parentHeaderWrapper {
    background-color: ${({ theme }) => theme.colors.hederBackground};
    box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.text11};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    min-height: 70px;
    position: fixed;
    z-index: 1000 !important;
    width: 100%;
    top: 0;
    right: 0;    
    z-index: 9999;
  }

  .leftSideHeaderWrapper {
    width: 100%;
    display:flex;
    align-items: center;
  }

  .mobileDropdownWrapper{
    margin-left:auto;
  }

  .mobileDropdownLabel{
    display:flex;
    gap:10px;
    align-items: center;
    width:100%;
  }

  .ant-dropdown-menu{
    margin-top: 0px;
  }

  .userProfile{
    display:flex;
    align-items: center;
  }

  .userProfile > span{
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.text5}
  }
  
  .leftSideHeaderWrapper img {
    width: 70px;
  }
  
  .profileIcon {
    cursor: pointer;
    color: var(--main-theme-color-1);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .rightSideMobileView {
    display: block;
  }
  
  .linkHeaderWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    color: ${({ theme }) => theme.colors.text5};
  }
  
  .desktopHeaderSearch {
    display: none;
    position: relative;
  }
  
  .rightSideDesktopView {
    display: none;
  }
  
  .rightSideHeaderWrapper {
    display: flex;
  }
  
  .linkHeaderWrapper .menuWrapper {
    font-family: ${({ theme }) => theme.font4};
    background-color: ${({ theme }) => theme.colors.hederBackground};
    display: none;
    width: 500px;
    border: 0;
  }
  
  .menuWrapper .menuItems {
    border: 0;
    color:  ${({ theme }) => theme.colors.text8};

  }
  
  .activeMenuItems span {
    color: ${({ theme }) => theme.colors.text5};
  }
  
  .menuWrapper .menuItems:hover {
    color: ${({ theme }) => theme.colors.text8} !important;
  }
  
  .menuWrapper .menuItems:after {
    border-bottom: 0 !important;
  }
  
  .menuItems.activeMenuItems::after {
    border-bottom: 4px solid ${({ theme }) =>
      theme.colors.background3} !important;
  }
  
  .menuWrapper .menuItems::after {
    bottom: -9px;
  }
  
  @media screen and (min-width: 820px) {
    .mobileDropdownWrapper{
      display:none;
    }
    .leftSideHeaderWrapper {
      width: auto;
    }
    .searchIcon {
      padding-left: 43px;
      background: url("../assets/images/icons/searchIcon.png") no-repeat 322px
      10px;
      background-size: 25px 25px;
      background-position: auto auto;
      height: 12px;
    }
  
    .desktopHeaderSearch {
      display: flex;
    }
    .mobileSearch {
      display: none;
    }
  
    .searchContent {
      background-color: ${({ theme }) => theme.colors.text5};
      color: ${({ theme }) => theme.colors.text9};
      border-radius: 20px;
      padding-left: 16px;
      height: 40px;
      width: 356px;
      border: 0;
    }
  
    .searchContent::placeholder {
      color: ${({ theme }) => theme.colors.text10};
      font-size: 13px;
    }
  
    .searchContent:focus {
      outline: none;
    }
  
    .rightSideDesktopView {
      display: block;
    }
    .rightSideMobileView {
      display: none;
    }
  
    .linkHeaderWrapper .menuWrapper {
      display: flex;
      justify-content: flex-end;
    }
  
    .parentHeaderWrapper {
      min-height: 76px;
      box-shadow: none;
    }
  
    .leftSideHeaderWrapper img {
      width: 88px;
    }
  
    .profileIcon img {
      width: 55px;
    }

    .ant-modal-body{
      // display:none
    }
    .popUpSearch{
      display:none
    }
  }
  .rightSideHeaderWrapper .ant-input{
    background-color: #fff;
    color: #000 !important;
    border-top-left-radius: 20px;
    padding-left: 16px;
    height: 40px;
    width: 330px !important;
    border: 0;
    border-bottom-left-radius: 20px;
  }
  .rightSideHeaderWrapper button.ant-btn.ant-btn-default.ant-btn-icon-only.ant-input-search-button{
    border: unset;
    margin-right: 10px;
  }
  .rightSideHeaderWrapper span.ant-input-group-addon{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .rightSideHeaderWrapper .ant-input::placeholder {  
    color: #707070;
    opacity: 1;
    font-family: ${({ theme }) => theme.font4};
    font-size: 13px;
  }
  .rightSideHeaderWrapper .ant-input-search .ant-input:hover, .ant-input-search .ant-input:focus {
    border-color: unset !important;
    box-shadow: #fff !important;
  }
  rightSideHeaderWrapper. .ant-input:focus, .ant-input-focused{
    box-shadow: 0 0 0 2px rgb(0 111 213 / 0%);
  }
  .ant-input:focus, .ant-input-focused{
    box-shadow: 0 0 0 2px rgb(0 111 213 / 0%) !important;
  }

  .icon-clear{
   height: 14px; 
   position: absolute;
   right: 45px;
   z-index: 1;
   color: ${({ theme }) => theme.colors.text9};
   font-weight: bold;
   cursor: pointer;
   font-size: 14px;
  }
`;
