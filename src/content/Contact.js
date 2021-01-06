import empty from "is-empty";
import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import validator from "validator";
import Layout from "../components/Layout";
import "../styles/Contact.css";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: null,
      errors: {},
      name: "",
      message: "",
      email: "",
      alert: false,
      alertType: "",
      alertMessage: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const err = {};
    this.setState({ errors: {} });

    if (!validator.isEmail(this.state.email)) {
      err.email = "Invalid email address";
    }
    if (validator.isEmpty(this.state.name)) {
      err.name = "Name Is Required";
    }
    if (validator.isEmpty(this.state.message)) {
      err.message = "Invalid message address";
    }

    if (!empty(err)) {
      this.setState({ errors: err });
      this.setState({ validated: false });
    } else {
      this.setState({ validated: true });
      fetch(`${process.env.REACT_APP_API_DOMAIN}/contactme`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        }),
      })
        .then((resp) => {
          this.setState({
            alert: true,
            alertType: "success",
            alertMessage: "Message Sent",
          });
          this.setState({ name: "", message: "", email: "", validated: null });
        })
        .catch((error) => {
          this.setState({
            alert: true,
            alertType: "danger",
            alertMessage: "Oh No! Error",
          });
        });
    }
  }

  render() {
    return (
      <div className="fill-height">
        <Layout>
          <h3 className="font-weight-bold bold-text">
            Contact DuraVerde J&N Roofing and Construction
          </h3>
          <hr />
          <Row xs={1} md={1} lg={2}>
            <Col className="left-content ">
              <p>
                Get a free inspection and estimate by contacting us. Either fill
                out the form or call/email us directly.
              </p>
              <p>
                A roof is one of the most valuable components of your home or
                business. A cheap roof may be the most expensive thing you ever
                buy. Our team are on hand to inspect, repair, and replace nearly
                any type of roof. When you work with DuraVerde J&N Roofing and
                Construction, you are working with a company who values safety
                and integrity. Reach out today to schedule an inspection!
              </p>
              <small>
                Email:{" "}
                <a
                  href="mailto:eduardo.eddy.verde94@gmail.com"
                  className="email-tag"
                >
                  eduardo.eddy.verde94@gmail.com
                </a>
              </small>
              <br />
              <small>Phone: 407-300-0479</small>
            </Col>
            <Col>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit.bind(this)}
              >
                <Form.Group controlId="contactForm.ControlInput2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="Enter Your Full Name"
                    isInvalid={this.state.errors.name}
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="contactForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    isInvalid={this.state.errors.email}
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="contactForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="3"
                    name="message"
                    placeholder="Type Your Message Here"
                    isInvalid={this.state.errors.message}
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a message.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Row className="center-content" xs={1} md={1} lg={2}>
                  <Button type="submit" className="yellow-submit-button">
                    <b></b>Submit Message
                  </Button>
                  {this.state.alert && (
                    <Alert
                      variant={this.state.alertType}
                      onClose={() => this.setState({ alert: false })}
                      dismissible
                    >
                      {this.state.alertMessage}
                    </Alert>
                  )}
                </Row>
              </Form>
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}
