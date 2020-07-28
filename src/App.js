import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NaviBar } from "./components/NaviBar";
import { Home } from "./content/Home";
import Services from "./content/Services";
import Contact from "./content/Contact";
import { NotFound } from "./content/NotFound";
import { Projects } from "./content/Projects";
import { CompanyProfile } from "./content/CompanyProfile";
import { Helmet } from "react-helmet";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta name="author" content="Eduardo Verde" />
          <meta
            name="description"
            content="DuraVerde J&N Roofing and Construction  is a full-service, professional roofing installation, replacement and roof repair contractor serving Cental Florida Area. We offer free, no-obligation roofing estimates. Call 407-300-0474."
          />
          <meta
            name="title"
            content="DuraVerde J&N Roofing and Construction | A Roofing Solution For You"
          />
          <meta
            name="keywords"
            content="florida roofing, roofing contractor, roof replacement company, roof repair services, central florida roofing, roof installers, roofers, orlando roofing"
          />
          <title>DuraVerde J&N Roofing and Construction</title>
          <link rel="canonical" href="https://duraverderoofing.com/about" />
          <link rel="canonical" href="https://duraverderoofing.com/projects" />
          <link rel="canonical" href="https://duraverderoofing.com/contact" />
          <link rel="author" href="https://eduardoverde.com" />
        </Helmet>
        <NaviBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/company-profile" component={CompanyProfile} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact-us" component={Contact} />
            <Route component={NotFound} status={404} />
          </Switch>
        </Router>
        <p>
          Footer Here with All rights to left & powered by Eduardo Verde, center
          License and Insured with License Number, right sitemap, about, contact
        </p>
      </React.Fragment>
    );
  }
}
