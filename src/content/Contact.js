import React, { Component } from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import validator from "validator";
import empty from "is-empty";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
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
      <Layout>
        <h3 className="font-weight-bold bold-text">
          Don't be a stranger <br />
          <span className="contact-header-second"> say hello</span>
        </h3>
        <hr />
        <Row xs={1} md={1} lg={2}>
          <Col className="left-content">
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas, or opportunities to be part of your
              vision.
            </p>
            <small>
              Email me directly at{" "}
              <a
                href="mailto:eduardo.eddy.verde94@gmail.com"
                className="email-tag"
              >
                eduardo.eddy.verde94@gmail.com
              </a>
            </small>
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
              <Row
                className="center-content"
                noGutters="true"
                xs={1}
                md={1}
                lg={2}
              >
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
    );
  }
}
