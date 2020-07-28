import React, { Component } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import CardColumns from "react-bootstrap/CardColumns";

class Education extends Component {
  render() {
    const Styles = styled.div``;
    const education = this.props.education;
    return (
      <Styles>
        <CardColumns>
          {education.map((edu, i) => [
            i > 0 && " ",
            <Cards
              key={i}
              title={edu.title}
              location={edu.location}
              where={edu.where}
              from={edu.from}
              to={edu.to}
            />,
          ])}
        </CardColumns>
      </Styles>
    );
  }
}

export default Education;
