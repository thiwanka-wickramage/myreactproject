import React from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const menuGenerator = {
  genSideMenu: (menu, param) => {
    let menuItems = [];

    for (const {label, link} of menu) {
      menuItems.push(
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">label</span>
          <Link to={{link}} />
        </Menu.Item>
      );
    }
    console.log('meu >>>>>>>>>>>> ', menuItems);
    return menuItems;
  }
};

export default menuGenerator;
