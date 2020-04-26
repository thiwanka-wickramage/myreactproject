import React, { Component } from "react";
import { Breadcrumb, Button, Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "../../../App.css";
import "../../../assets/css/containers/dashboardLayout.css";
import SideNav from "../../../components/common/sideNav";
import Header from "../../../components/common/header";
import Footer from "../../../components/common/footer";
import NavigationInfoBar from "../../../components/common/navigationInfoBar";
import DashboardRoutes from "../../routes/dashboard";

const { Content } = Layout;

class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsiveMargin: 200,
    };
  }

  render() {
    const setMargin = (collapsed) => {
      this.setState({ responsiveMargin: collapsed ? 0 : 200 });
    };

    /*jsjs*/

    return (
      <Router>
        <Layout>
          <SideNav setMargin={setMargin} />
          <Layout>
            <Header
              responsiveMargin={this.state.responsiveMargin}
              signOut={this.props.signOut}
            />
            <Content
              style={{
                margin: "65px 0px 0",
                marginLeft: this.state.responsiveMargin,
              }}
            >
              <div className="site-layout-background">
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
