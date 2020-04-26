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
  const { activeKey, parentKeys } = MenuHelper.getActiveMenu();
  const sideMenu = MenuHelper.menu;

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
        defaultSelectedKeys={activeKey}
        defaultOpenKeys={parentKeys}
      >
        {sideMenu.map((m) => {
          if (!m.sub)
            return (
              <Menu.Item key={m.key}>
                <UserOutlined />
                <span className="nav-text">{m.label}</span>
                <Link to={m.link} />
              </Menu.Item>
            );
          else
            return (
              <SubMenu
                key={m.key}
                title={
                  <span>
                    <AppstoreOutlined />
                    <span>{m.label}</span>
                  </span>
                }
              >
                {m.sub.map((s) => (
                  <Menu.Item key={s.key}>
                    {s.label}
                    <Link to={s.link} />
                  </Menu.Item>
                ))}
              </SubMenu>
            );
        })}
      </Menu>
    </Sider>
  );
};

export default SideNav;
