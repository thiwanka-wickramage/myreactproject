import { Breadcrumb } from "antd";
import React from "react";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import "../../../assets/css/components/common/navigationInfoBar.css";
import { sideNavMenu } from "../../../constants/menuConstants";

const data = () => {
  const currentPath = window.location.pathname.split("/");
  const path = sideNavMenu.filter(({ link, parentKey }) => true);
  console.log("path eee>>>>>>>>>>>> ", path);
};
data();
const NavigationInfoBar = (props) => (
  <div className={"content-top-info-bar"}>
    <div className={"activeTitle"}>
      <h1>Application List</h1>
    </div>
    <div className={"breadcrumb-custom"}>
      <Breadcrumb style={{ marginBottom: "25px" }}>
        <Breadcrumb.Item href="/dashboard">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  </div>
);

export default NavigationInfoBar;
