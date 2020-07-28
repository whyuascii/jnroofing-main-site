import React, { Component } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaAngular,
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaBootstrap,
  FaGitlab,
  FaGit,
  FaJenkins,
  FaAws,
  FaDocker,
  FaCode,
} from "react-icons/fa";

class Skills extends Component {
  render() {
    const Styles = styled.div`
      svg {
        font-size: 25px;
      }
    `;

    return (
      <Styles>
        <h3>Languages</h3>

        <Row
          xs={3}
          md={5}
          lg={8}
          className="text-center justify-content-center align-self-center"
        >
          <Col>
            <FaJs />
            <p>JavaScript</p>
          </Col>
          <Col>
            <FaCode />
            <p>TypeScript</p>
          </Col>
          <Col>
            <FaPython />
            <p>Python</p>
          </Col>
          <Col>
            <FaJava />
            <p>Java</p>
          </Col>
          <Col>
            <FaCode />
            <p>Go</p>
          </Col>
        </Row>
        <h3>FrameWorks</h3>
        <Row
          xs={3}
          md={5}
          lg={8}
          className="text-center justify-content-center align-self-center"
        >
          <Col>
            <FaAngular />
            <p>Angular 4+</p>
          </Col>
          <Col>
            <FaReact />
            <p>React</p>
          </Col>
          <Col>
            <FaVuejs />
            <p>VueJS</p>
          </Col>
          <Col>
            <FaNodeJs />
            <p>NodeJS</p>
          </Col>
          <Col>
            <FaCode />
            <p>ExpressJS</p>
          </Col>
          <Col>
            <FaCode />
            <p>Flask</p>
          </Col>
          <Col>
            <FaCode />
            <p>Django</p>
          </Col>
          <Col>
            <FaCode />
            <p>SpringBoot</p>
          </Col>
          <Col>
            <FaBootstrap />
            <p>Bootstrap</p>
          </Col>
          <Col>
            <FaCode />
            <p>Cordova</p>
          </Col>
        </Row>
        <h3>Technologies</h3>
        <Row
          xs={3}
          md={5}
          lg={8}
          className="text-center justify-content-center align-self-center"
        >
          <Col>
            <FaCode />
            <p>RabbitMQ</p>
          </Col>
          <Col>
            <FaAws />
            <p>AWS</p>
          </Col>
          <Col>
            <FaCode />
            <p>Nginx</p>
          </Col>
          <Col>
            <FaDocker />
            <p>Docker</p>
          </Col>
          <Col>
            <FaCode />
            <p>Kubernetes</p>
          </Col>
          <Col>
            <FaCode />
            <p>MySQL</p>
          </Col>
          <Col>
            <FaCode />
            <p>Oracle</p>
          </Col>
          <Col>
            <FaCode />
            <p>PostgreSQL</p>
          </Col>
          <Col>
            <FaCode />
            <p>MongoDB</p>
          </Col>
          <Col>
            <FaJenkins />
            <p>Jenkins</p>
          </Col>
          <Col>
            <FaGit />
            <p>Git</p>
          </Col>

          <Col>
            <FaGitlab />
            <p>Gitlab</p>
          </Col>
          <Col>
            <FaCode />
            <p> Gitlab CI</p>
          </Col>
          <Col>
            <FaCode />
            <p> ELK</p>
          </Col>
          <Col>
            <FaCode />
            <p> Splunk</p>
          </Col>
        </Row>
        <h3>Other Skills</h3>
        <Row
          xs={3}
          md={5}
          lg={8}
          className="text-center justify-content-center align-self-center"
        >
          <Col>
            <p>Project Management</p>
          </Col>
          <Col>
            <p>Web Development</p>
          </Col>
          <Col>
            <p>Data Modeling</p>
          </Col>
          <Col>
            <p>Microservices</p>
          </Col>
          <Col>
            <p>REST Principles</p>
          </Col>
          <Col>
            <p>TDD</p>
          </Col>
          <Col>
            <p>BDD</p>
          </Col>
        </Row>
      </Styles>
    );
  }
}

export default Skills;
