import {Avatar, Badge, Dropdown, Layout, Menu, Popover} from "antd";
import React from "react";
import { UserOutlined, DownOutlined, BellOutlined } from "@ant-design/icons";
const { Header:CustomHeader } = Layout;

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const menu = (
  <Menu style={{ marginTop: "20px", borderTop: "2px solid #1890ff" }}>
    <Menu.Item key="0">
      <a href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const Header = ({ responsiveMargin }) => (
  <CustomHeader
    className="site-layout-sub-header-background"
    style={{ marginLeft: responsiveMargin }}
  >
    <div style={{ float: "right", marginRight: responsiveMargin }}>
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Badge dot count={1} style={{ top: "7px", right: "6px" }}>
          <BellOutlined
            style={{ fontSize: "21px", position: "relative", top: "5px" }}
          />
        </Badge>
      </Popover>
      <Dropdown overlay={menu} trigger={["click"]} placement={"bottomRight"}>
        <a
          className="ant-dropdown-link"
          onClick={e => e.preventDefault()}
          style={{ paddingLeft: "22px" }}
        >
          <Avatar icon={<UserOutlined />} /> martin king <DownOutlined />
        </a>
      </Dropdown>
    </div>
  </CustomHeader>
);

export default Header;
