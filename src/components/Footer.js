import React, { Component } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import "../styles/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="justify-content-center pt-3 pb-3 footer-background">
        <Row className="justify-content-center ml-0 mr-0">
          <Col
            md
            className="text-xs-center text-sm-center text-md-left text-lg-left "
          >
            ©2021 DuraVerde J&N Roofing and Construction. All Rights Reserved.
            Privacy Policy.
          </Col>
          <Col
            md
            className="text-xs-center text-sm-center text-md-center text-lg-center"
          >
            Licensed #CCC1332515 & Insured
          </Col>
          <Col
            md
            className="text-xs-center text-sm-center text-md-right text-lg-right"
          >
            {/* Sitemap About News Contact Privacy */}
            <Nav className="footer-mini-nav">
              <Nav.Item>
                <Nav.Link href="/sitemap.xml" className="footer-nav">
                  Sitemap
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="/company-profile"
                  className="footer-nav"
                >
                  Our Company
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-2"
                  href="/contact-us"
                  className="footer-nav"
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}
