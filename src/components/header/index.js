import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";

import Dropdown from "../dropdown";
import Logo from "../../assets/images/dashboard-logo.png";
import ImgProfile from "../../assets/images/profile.png";
import SearchIconWhite from "../../assets/images/icons/searchIconWhite.svg";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

import { HeaderCss } from "../../styles/header";
import { useNavigate } from "react-router";
import { useAuthentication } from "../../authentication";

import { Modal, Input } from "antd";
import themes from "../../config/theme/theme.json";

const { Search } = Input;
const Header = ({
  logo,
  leadData,
  handleLogoClick,
  customClass: { logoClass },
  isSearchEnable,
  isProfileEnable,
  searchText,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("");
  const { Profile } = leadData;
  const { signOut, getAuthInfoFromCookie } = useAuthentication();
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState(searchText || "");

  const handleLogout = () => {
    signOut();

    navigate("/");
  };

  const authData = getAuthInfoFromCookie("authSessionState"); // authorization data from cookie
  const firstName = authData?.userInfo?.firstName; // first name form user Info
  const lastName = authData?.userInfo?.lastName; // last name from user info

  const dropdownOptions = [
    {
      label: (
        <div className="mobileDropdownLabel">
          <IoIosLogOut style={{ fontSize: 20, color: themes.colors.text10 }} />
          <span style={{ color: themes.colors.primary }}>Logout</span>
        </div>
      ),
      clickHandler: handleLogout,
    },
  ];

  const mobileDropdownOptions = [
    {
      label: (
        <div className="mobileDropdownLabel">
          <FaUserCircle style={{ fontSize: 20, color: themes.colors.text10 }} />
          <span>
            {firstName} {lastName}
          </span>
        </div>
      ),
      clickHandler: () => {},
    },
    ...dropdownOptions,
  ];

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setIsModalVisible(false);
      navigate(`/dashboardSearch?search=${event.target.value}`);
    }
  };

  const handleSearch = (value) => {
    if (value.trim() !== "") {
      setIsModalVisible(false);
      navigate(`/dashboardSearch?search=${value}`);
      setSearchVal(value);
    }
  };

  return (
    <>
      <HeaderCss />
      <div className="parentHeaderWrapper">
        <div className="leftSideHeaderWrapper">
          <img
            src={logo}
            alt="logo"
            title="Logo"
            onClick={handleLogoClick}
            className={logoClass}
          />
        </div>

        <div className="rightSideHeaderWrapper">
          {/* To show / hide search box from header*/}
          {isSearchEnable && (
            <>
              <div className="desktopHeaderSearch linkHeaderWrapper">
                <Search
                  placeholder="Search by name or email or phone number"
                  onSearch={handleSearch}
                  value={searchVal}
                  onChange={(event) => setSearchVal(event.target.value)}
                  width={356}
                />
                {searchVal && (
                  <>
                    {/* <img
                      src={IconClose}
                      alt="searchIcon"
                      title="searchIcon"
                      className="icon-clear"
                      onClick={() => setSearchVal("")}
                    /> */}
                    <CloseOutlined
                      className="icon-clear"
                      onClick={() => setSearchVal("")}
                    />
                  </>
                )}
              </div>
              <div className="mobileSearch">
                <img
                  src={SearchIconWhite}
                  alt="searchIcon"
                  title="searchIcon"
                  onClick={showModal}
                />
                <Modal
                  style={{ top: 62 }}
                  width="100%"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                  className="mobileTopSearch"
                >
                  <div className="popUpSearch">
                    <input
                      type="text"
                      className="searchIcon searchContent"
                      placeholder="Name or email or phone number"
                      onKeyDown={handleKeyDown}
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    />
                    <SearchOutlined
                      className="search-icon-click"
                      onClick={() => handleSearch(text)}
                    />
                  </div>
                </Modal>
              </div>
            </>
          )}
          {/* To show  profile name in mobile view */}
          {isProfileEnable && (
            <div className="rightSideMobileView">
              <Dropdown options={mobileDropdownOptions}>
                <GiHamburgerMenu
                  style={{
                    height: 21,
                    width: 21,
                    verticalAlign: "middle",
                    color: themes.colors.text5,
                  }}
                />
              </Dropdown>
            </div>
          )}
          {/* To show  profile name in desktop view */}
          {isProfileEnable && (
            <div className="rightSideDesktopView">
              <div className="userProfile">
                <span>{`${firstName ?? ""} ${lastName ?? ""}`}</span>
                <Dropdown options={dropdownOptions}>
                  <div className="profileIcon">
                    <img src={Profile} alt="User" />
                  </div>
                </Dropdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  logo: PropTypes.string,
  handleLogoClick: PropTypes.func,
  leadData: PropTypes.object,
  customClass: PropTypes.object,
};
// default props pass---
Header.defaultProps = {
  isProfileEnable: true,
  isSearchEnable: true,
  logo: Logo,
  customClass: {
    logoClass: "",
  },
  leadData: {
    Profile: ImgProfile,
  },
  dropdownOptions: [
    {
      label: "Logout",
    },
  ],
  mobileDropdownOptions: [
    {
      label: "Logout",
    },
  ],
  selectedMenu: "myReferral",
};

export default Header;
