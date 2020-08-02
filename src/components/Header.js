import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../styles/Jumbotron.css";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="background-img">
        <Container className=" jumbo align-items-center text-padding ">
          <Container className="text-center">
            <div className="text-center center-jumbo-text">
              <h1 className="font-weight-bold">
                DuraVerde J&N <br /> Roofing and Construction
              </h1>
              <br />
              <h2>We Are Here To Help.</h2>
              <br />
              <p>
                We are a full-service, professional roofing installation,
                replacement and roof repair contractor serving Cental Florida
                Area. We offer free, no-obligation roofing estimates.
              </p>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}
