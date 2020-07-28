import React, { Component } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import CardColumns from "react-bootstrap/CardColumns";

class Work extends Component {
  render() {
    const Styles = styled.div``;
    const jobs = this.props.jobs;

    return (
      <Styles>
        <CardColumns>
          {jobs.map((job, i) => [
            i > 0 && " ",
            <Cards
              key={i}
              title={job.title}
              location={job.location}
              where={job.where}
              from={job.from}
              to={job.to}
              detail={job.detail}
              technology={job.technology}
              language={job.language}
            />,
          ])}
        </CardColumns>
      </Styles>
    );
  }
}

export default Work;
