import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AssetManagement from "../../../containers/assetManagement";
import AMCreateForm from "../../../containers/assetManagement/form/CreateForm";

const PageNotFound = () => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "red",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 1111,
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
    <h1>Hi Comp2 Component</h1>
  </div>
);

const Comp3 = () => (
  <div>
    <h1>create new</h1>
  </div>
);

const DashboardRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>
    <Route exact path="/dashboard" component={Comp1} />

    <Route exact path="/asset-management" component={AssetManagement} />
    <Route exact path="/asset-management/create" component={AMCreateForm} />

    <Route exact path="/md/master-data" component={Comp2} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
export default DashboardRoutes;
