import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../styles/Cards.css";

export default class Cards extends Component {
  render() {
    const describe = this.props.describe;
    return (
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.img}
            alt={this.props.imgAlt}
          />
          <Card.Body>
            <Card.Title className="text-center font-weight-bold ">
              {this.props.title}
            </Card.Title>
            {describe?.length > 0 && (
              <div>
                <hr />
                <Card.Subtitle className="text-center">
                  <p>{describe}</p>
                  <br />
                </Card.Subtitle>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
