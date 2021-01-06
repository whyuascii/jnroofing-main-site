import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default (
  <React.Fragment>
    <Router>
      <Switch>
        <Route path="/services" />
        <Route path="/company-profile" />
        <Route path="/contact-us" />
      </Switch>
    </Router>
  </React.Fragment>
);
