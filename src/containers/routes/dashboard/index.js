import React from "react";
import { Route, Switch, Redirect, browserHistory } from "react-router-dom";

import { componentRoutes } from "../../../constants";
import AssetManagement from "../../../containers/assetManagement";
import CreateAsset from "../../../containers/assetManagement/createAsset";
import NavigationInfoBar from "../../../components/common/navigationInfoBar";

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
const Comp1 = (props) => {
  return (
    <div>
      <h1>Hi Test 1 Component {props.title} </h1>
    </div>
  );
};

const Comp2 = () => (
  <div>
    <h1>Hi Comp2 Component</h1>
  </div>
);

const Comp3 = () => (
  <div>
    <h1>create ffffffffffffffff</h1>
  </div>
);

const componentMap = { Comp1, AssetManagement, CreateAsset, Comp2 };

const generateRoute = (item, index) => {
  const InfoComp = NavigationInfoBar;
  const DynamicComp = componentMap[item.component];
  return (
    <Route
      key={index}
      exact
      path={item.path}
      render={(props) => (
        <>
          <InfoComp {...props} title={item.title} /> <DynamicComp {...props} />
        </>
      )}
    />
  );
};

const DashboardRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>

    {componentRoutes.map((item, index) => {
      let tempMap = [generateRoute(item, index)];
      if (item.subs) {
        item.subs.map((sub, index) => {
          const _sub = Object.assign({}, sub);
          _sub.path = `${item.path}${sub.path}`;
          tempMap.push(generateRoute(_sub, index));
        });
      }
      return tempMap;
    })}

    <Route path="*" component={PageNotFound} />
  </Switch>
);
export default DashboardRoutes;
