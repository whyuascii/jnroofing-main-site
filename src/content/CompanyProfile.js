import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import "../styles/CompanyProfile.css";

export class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Layout>
          <div>
            *This will need to be center of image*
            <p>Welcome To</p>
            <h1>DuraVerde J&N Roofing and Construction</h1>
            <p>
              We are a full-service, professional roofing installation,
              replacement and roof repair contractor serving Cental Florida
              Area. We offer free, no-obligation roofing estimates.
            </p>
            <p>
              We Stand Under Our Roofs!
              <br />
              logo
              <br />
              Central Florida | Number | email | Lic#
              <br />
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}
