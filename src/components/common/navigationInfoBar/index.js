import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import "../../../assets/css/components/common/navigationInfoBar.css";
import { MenuHelper } from "../../../helpers";

const NavigationInfoBar = (props) => {
  return (
    <div className={"content-top-info-bar"}>
      <div className={"activeTitle"}>
        <h1>{props.title}</h1>
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
};

export default NavigationInfoBar;
