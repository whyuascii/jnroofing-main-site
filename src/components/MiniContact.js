import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../styles/MiniContact.css";
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
      <div className="justify-content-center pt-3 pb-3 mini-form-style ">
        <Row className="justify-content-center ml-0 mr-0">
          <h2 className="font-weight-bold ">Request A Free Estimate Now!</h2>
        </Row>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit.bind(this)}
          className="justify-content-center"
        >
          <Form.Row className="justify-content-center ml-5 mr-5">
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputName" srOnly>
                Name
              </Form.Label>
              <Form.Control
                required
                id="inlineFormInputName"
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
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputEmail" srOnly>
                Email address
              </Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                id="inlineFormInputEmail"
                placeholder="example@gmail.com"
                isInvalid={this.state.errors.email}
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputPhone" srOnly>
                Phone Number
              </Form.Label>
              <Form.Control
                required
                type="phone"
                name="phone"
                id="inlineFormInputPhone"
                placeholder="111-111-1111"
                isInvalid={this.state.errors.phone}
                value={this.state.phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2" variant="dark">
                Submit Request
              </Button>
            </Col>
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
