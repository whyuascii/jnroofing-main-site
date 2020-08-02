import validator from "validator";
import empty from "is-empty";

var contactSubmit = function () {
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
};
exports.contactSubmit = contactSubmit;
