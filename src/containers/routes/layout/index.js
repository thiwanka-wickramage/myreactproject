import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginComponent from "../../../components/login";
import DashboardLayout from "../../layout/dashboard";

const GenRoutes = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

const LayoutRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LoginComponent} />
      <GenRoutes path="/dashboard" component={DashboardLayout} />
    </Switch>
  );
};

export default LayoutRoutes;
