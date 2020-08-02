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
export default class MiniContact extends Component {
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
  }

  render() {
    return (
      <div style={{ width: "100%", background: " rgb(15, 189, 86)" }}>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit.bind(this)}
        >
          <Form.Row className="center-content" noGutters="true">
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
            <Button>Submit Message</Button>
          </Form.Row>
        </Form>

        {this.state.alert && (
          <Alert
            variant={this.state.alertType}
            onClose={() => this.setState({ alert: false })}
            dismissible
          >
            {this.state.alertMessage}
          </Alert>
        )}
      </div>
    );
  }
}
