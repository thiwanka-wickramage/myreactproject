import { Menu } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Sider from "antd/es/layout/Sider";
import {
  UserOutlined,
  UploadOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "../../../assets/css/components/common/sideNav.css";
import SubMenu from "antd/es/menu/SubMenu";
import { MenuHelper } from "../../../helpers";

const SideNav = ({ setMargin }) => {
  const activeMenuKey = MenuHelper.getActiveMenu();
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed) => {
        setMargin(collapsed);
      }}
      style={{ position: "fixed", height: "100vh", zIndex: 1001 }}
    >
      <div className="logo">
        <h1>ISM</h1>
        <span>system</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        style={{ marginTop: "20px" }}
        defaultSelectedKeys={activeMenuKey}
        defaultOpenKeys={activeMenuKey}
      >
        <Menu.Item key="10">
          <UserOutlined />
          <span className="nav-text">Dashboard</span>
          <Link to="/dashboard" />
        </Menu.Item>

        <SubMenu
          key="20"
          title={
            <span>
              <AppstoreOutlined />
              <span>Master Data</span>
            </span>
          }
        >
          <Menu.Item key="201">
            Master Program
            <Link to="/md/master-data" />
          </Menu.Item>
          <Menu.Item key="202">
            Master Program Data
            <Link to="/md/program-data" />
          </Menu.Item>
          <Menu.Item key="203">
            Vendor Management
            <Link to="/md/vendor-management" />
          </Menu.Item>
          <Menu.Item key="204">
            User Info
            <Link to="/md/user-info" />
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="30">
          <UploadOutlined />
          <span className="nav-text">Asset Management</span>
          <Link to="/asset-management" />
        </Menu.Item>
        <Menu.Item key="40">
          <UserOutlined />
          <span className="nav-text">Process Management</span>
          <Link to="/process-management" />
        </Menu.Item>
        <Menu.Item key="50">
          <UserOutlined />
          <span className="nav-text">Risk Management</span>
          <Link to="/risk-management" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
