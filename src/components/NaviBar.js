import React, { Component } from "react";
import { Nav, Navbar as ReactBar } from "react-bootstrap";
import "../styles/NaviBar.css";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import Logo from "../assets/jn-logo.png";

export class NaviBar extends Component {
  render() {
    return (
      <div>
        <ReactBar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="light"
          variant="light"
        >
          <ReactBar.Brand href="/">
            <Image src={Logo} className="ml-5 navi-brand-img" />
          </ReactBar.Brand>
          <ReactBar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact </Nav.Link>
              </Nav.Item> */}
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/services">Our Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/company-profile">Our Company</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/projects">Our Work</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact-us">Contact Us </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact-us">407-300-0479 </Nav.Link>
              </Nav.Item>
            </Nav>
          </ReactBar.Collapse>
        </ReactBar>
      </div>
    );
  }
}
