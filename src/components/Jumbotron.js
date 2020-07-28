import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../styles/Jumbotron.css";
import ReactTypingEffect from "react-typing-effect";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="background-img">
        <Container className=" jumbo align-items-center">
          <Container className="center-text">
            <div>
              *This will need to be center of image*
              <p>Welcome To</p>
              <h1>DuraVerde J&N Roofing and Construction</h1>
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
