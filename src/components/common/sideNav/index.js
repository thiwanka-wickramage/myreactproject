import { Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import Sider from "antd/es/layout/Sider";
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

const SideNav = ({ setMargin }) => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={collapsed => {
        setMargin(collapsed);
      }}
      style={{ position: "fixed", height: "100vh", zIndex: 1001 }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">nav 1</span>
          <Link to="/test1" />
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span className="nav-text">nav 2</span>
          <Link to="/test2" />
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <UserOutlined />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
