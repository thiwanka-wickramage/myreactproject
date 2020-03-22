import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const Comp1 = () => (
    <div>
        <h1>Hi Test 1 Component</h1>
    </div>
);

const Comp2 = () => (
    <div>
        <h1>Hi Test 2 Component</h1>
    </div>
);

const DashboardRoutes = () => (
  <Switch>
    <Route exact path="/login">
      <Redirect to="/" />
    </Route>
    <Route exact path="/dashboard/test1" component={Comp1} />
    <Route exact path="/dashboard/test2" component={Comp2} />
  </Switch>
);
export default DashboardRoutes;
