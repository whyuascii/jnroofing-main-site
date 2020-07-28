import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default (
  <React.Fragment>
    <Router>
      <Switch>
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/projects" />
      </Switch>
    </Router>
  </React.Fragment>
);
