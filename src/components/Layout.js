import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return (
      <Container className="mt-5 mobile-page">{this.props.children}</Container>
    );
  }
}
