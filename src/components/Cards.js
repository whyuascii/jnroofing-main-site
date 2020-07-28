import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/Cards.css";

export default class Cards extends Component {
  render() {
    const technology = this.props.technology;
    const language = this.props.language;

    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title className="d-flex">
              {this.props.title}
              <i className="ml-auto">
                {this.props.from} - {this.props.to}
              </i>
            </Card.Title>
            <hr />
            <Card.Subtitle className="mb-2 text-muted d-flex">
              <i className="">{this.props.location}</i>
              <i className="ml-auto">{this.props?.where}</i>
            </Card.Subtitle>
            <ListGroup variant="flush">
              {this.props.detail?.map((item, i) => (
                <ListGroup.Item key={i}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
          {(technology?.length > 0 || language?.length > 0) && (
            <Card.Footer className="text-muted">
              <small className="text-muted">
                <b>Technologies and Tools:</b>{" "}
                {technology.map((tech, i) => [
                  i > 0 && ", ",
                  <span key={i}>{tech}</span>,
                ])}
              </small>
              <br />
              <small>
                <b>Languages:</b>{" "}
                {language.map((lang, i) => [
                  i > 0 && ", ",
                  <span key={i}>{lang}</span>,
                ])}
              </small>
            </Card.Footer>
          )}
        </Card>
      </div>
    );
  }
}
