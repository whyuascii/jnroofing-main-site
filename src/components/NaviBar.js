import React, { Component } from "react";
import { Nav, Navbar as ReactBar } from "react-bootstrap";
import "../styles/NaviBar.css";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import Logo from "../assets/jn-logo.png";

export class NaviBar extends Component {
  handleSelect = (eventKey) => console.log(`selected ${eventKey}`);
  //  TODO: Update this to show active Tab
  render() {
    return (
      <div>
        <ReactBar collapseOnSelect expand="lg" fixed="top">
          <ReactBar.Brand href="/">
            <Image src={Logo} className="navi-brand-img" />
          </ReactBar.Brand>
          <ReactBar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav onSelect={this.handleSelect}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" href="/services">
                  Our Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" href="/company-profile">
                  Our Company
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="3" href="/projects">
                  Our Work
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="4" href="/contact-us">
                  Contact Us{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ml-5 navi-phone" href="/contact-us">
                  {" "}
                  <FaPhoneAlt />
                  407-300-0479{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </ReactBar.Collapse>
        </ReactBar>
      </div>
    );
  }
}
