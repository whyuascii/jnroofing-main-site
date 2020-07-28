import React, { Component } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Work from "../aboutContent/Work";
import Skills from "../aboutContent/Skills";
import Education from "../aboutContent/Education";
import "../styles/About.css";

export default class About extends Component {
  render() {
    const education = [
      {
        title: "BA in Computer Science",
        location: "Rollins",
        where: "Winter Park, FL",
        from: "08/2014",
        to: "12/2017",
      },
      {
        title: "Security+",
        location: "CompTIA",
        from: "07/2018",
        to: "07/2021",
      },
      {
        title: "AWS CCP",
        location: "AWS",
        from: "07/2020",
        to: "07/2023",
      },
    ];

    const work = [
      {
        location: "Attain LLC",
        title: "Sr. Associate",
        where: "Remote",
        from: "06/20",
        to: "Current",
        detail: [
          "Developed and Maintained a microservice cloud-ready Biometrics application",
        ],
        technology: ["SpringBoot", "AWS"],
        language: ["Java", "JavaScript", "SQL"],
      },
      {
        location: "Adapt Forward",
        title: "Full Stack DevOps Software Engineer",
        where: "Remote",
        from: "01/18",
        to: "5/20",
        detail: [
          "Designed, Architecture, managed, contributed to a microservice application following core software principles.",
          "Mentored multiple other developers overcome roadblocks and assist in their development goals.",
          "Collaborated with Sr Developers and customers to gather requirements and user acceptance criteria. Additionally, transition those requirements to create and manage sprints.",
        ],
        technology: [
          "AWS",
          "Flask",
          "Pyramid",
          "ExpressJS",
          "Angular7",
          "MySQL",
          "PostgreSQL",
          "Docker",
        ],
        language: ["Python", "TypeScript", "JavaScript", "SQL"],
      },
      {
        location: "DHS/CBP",
        title: "Software Engineer",
        where: "Remote",
        from: "8/15",
        to: "12/17",
        detail: [
          "Developed a modern, responsive, and accessibility website for the public domain as well as an internal enterprise tool that could be used on any device.",
          "Became a key member in evaluating, containerizing, decoupling, and refactoring 90 different internal application which would transition from on-premise to the cloud.",
          "Refactored multiple applications to stratify security standards, responsiveness, and configurable for cloud deployment.",
        ],
        technology: [
          "SpringBoot",
          "Angular 4",
          "Flask",
          "Django",
          "Oracle",
          "MySQL",
          "Ionic/Cordova/PhoneGap",
          "Docker",
        ],
        language: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
      },
      {
        location: "DHS/CBP",
        title: "Technical Specialist",
        where: "Orlando, FL",
        from: "10/13",
        to: "8/14",
        detail: [
          "The core technology expert that not only adopted a tightly coupled legacy MS Access Database that was dependent on MS spreadsheets but overhauled the entire system into a modern web application.",
          "Transformed Cost Recovery Model (CRM) design requirements into a fully functioning prototype system capable of calculating service pricing for multiple customers based on a complex set of modifiable recovery scenarios and parameters. This system integrates financial, service, asset, and utilization data for providers, suppliers, and customers.",
          "Coded and Maintained a database the was used to manage and track land mobile radio assets and configuration across the nation.",
        ],
        technology: ["SpringBoot", "MySQL", "Access"],
        language: ["Java", "JavaScript", "VBA"],
      },
    ];

    return (
      <Layout>
        <h3 className="font-weight-bold bold-text"> Who Is This Guy?</h3>
        <hr />
        <Container className="background-text pt-3 pb-3 mb-4">
          <p>
            Agile trained Full-Stack DevOps Software Engineer with a complete
            understanding of the software development life-cycle process. Versed
            in several programming languages, emerging technology, cloud
            computing, Microservices, containerization, and a variety of
            frameworks. I am proactive, results-driven, and a problem solver who
            is innovative, resourceful, and comfortable with risk-taking.
          </p>
          <p>
            More than 6 years of programming and enterprise application
            development experience.
          </p>
        </Container>

        <h3 className="font-weight-bold bold-text"> What's The Latest?</h3>
        <hr />
        <Container className="background-text pt-3 pb-3 mb-4">
          <p>
            Currently, at Attain, I am a Sr. Associate working with USCIS as a
            Full-Stack Developer. In this position, I am taking my microservice
            and containerization background to assist in developing an
            enterprise-level application utilizing AWS and open source tools,
            Machine Learning, and Big Data.
            <br />
            <br />
            Outside of Attain, I explore a multitude of different technologies
            (ie Neo4J, GraphQL, Web Assembly), languages (ie GoLang, Rust), and
            side projects (Tricoder Security, a SOAR/SIEM product)
          </p>
        </Container>

        <h3 className="font-weight-bold bold-text">Skills?</h3>
        <hr />
        <Container className="background-text pt-3 pb-3 mb-4">
          <Skills />
        </Container>

        <h3 className="font-weight-bold bold-text">Where Have You Worked?</h3>
        <hr />
        <Container className="background-text pt-3 pb-3 mb-4">
          <Work jobs={work} />
        </Container>

        <h3 className="font-weight-bold bold-text text-wrap">
          Any Eduction, Training, Certifications?
        </h3>
        <hr />
        <Container className="background-text pt-3 pb-3 mb-4">
          <Education education={education} />
        </Container>
      </Layout>
    );
  }
}
