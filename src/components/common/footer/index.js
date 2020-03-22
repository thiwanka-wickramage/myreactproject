import React from "react";
import { Layout } from "antd";
const { Footer:CustomFooter } = Layout;

const Footer = () => (
  <CustomFooter style={{ textAlign: "center" }}>
    Ant Design ©2018 Created by Ant UED
  </CustomFooter>
);
export default Footer;
