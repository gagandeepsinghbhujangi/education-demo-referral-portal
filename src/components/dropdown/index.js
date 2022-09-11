import PropTypes from "prop-types";
import { Menu, Dropdown as Select } from "antd";
import Styles from "./style.module.css";
import "antd/dist/antd.css";

const Dropdown = ({ children, options }) => {
  const menu = (
    //show dropdown ex- logout on click userAvatar
    <Menu className={Styles.menu}>
      {options.map((option, index) => {
        const { label, clickHandler } = option;
        return (
          <Menu.Item key={index} className={Styles.menuItems}>
            <div className={Styles.menuItemContainer} onClick={clickHandler}>
              {label}
            </div>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Select overlay={menu} trigger={["click"]} placement="bottomRight">
      <div>{children ?? "Dropdown"}</div>
    </Select>
  );
};

Dropdown.prototype = {
  children: PropTypes.string,
  options: PropTypes.array,
};

Dropdown.defaultProps = {
  children: PropTypes.element,
  options: [],
};

export default Dropdown;
