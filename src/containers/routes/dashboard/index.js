import React from "react";
import { Route, Switch } from "react-router-dom";
const PageNotFound = () => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "red",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 1111
    }}
  >
    <h1>Page Not Found</h1>
  </div>
);
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
    <Route exact path="/test1" component={Comp1} />
    <Route exact path="/test2" component={Comp2} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
export default DashboardRoutes;
