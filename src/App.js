import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutRoutes from "./containers/routes/layout";

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutRoutes />
      </Router>
    );
  }
}
export default App;
