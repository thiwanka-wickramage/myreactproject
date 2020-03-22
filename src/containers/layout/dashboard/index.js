import React, { Component } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "../../../App.css";
import SideNav from "../../../components/common/sideNav";
import Header from "../../../components/common/header";
import Footer from "../../../components/common/footer";
import DashboardRoutes from "../../routes/dashboard";

const { Content } = Layout;

class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsiveMargin: 200
    };
  }

  render() {
    const setMargin = collapsed => {
      this.setState({ responsiveMargin: collapsed ? 0 : 200 });
    };

    return (
      <Router>
        <Layout>
          <SideNav setMargin={setMargin} />
          <Layout>
            <Header responsiveMargin={this.state.responsiveMargin} />
            <Content
              style={{
                margin: "65px 0px 0",
                marginLeft: this.state.responsiveMargin
              }}
            >
              <div className="site-layout-background">
                <div> content </div>
                <DashboardRoutes />
              </div>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default DashboardLayout;
