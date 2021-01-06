import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Commercial from "../assets/commercial.jpg";
import Repair from "../assets/repairshome.jpg";
import Residential from "../assets/shingle-roof.jpg";
import ToolBelt from "../assets/tool-belt.jpg";
import Cards from "../components/Cards";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import MiniContact from "../components/MiniContact";
import "../styles/Home.css";
export class Home extends Component {
  render() {
    const types = [
      {
        title: "Roof Repairs",
        img: Repair,
        imgAlt: "A House with shingles type of roof",
        describe:
          "Don’t wait for signs of advanced roof damage before taking action. Scheduling regular inspections, doing preventative maintenance, and completing repairs regularly can ensure a positive outcome for your roof, home, and wallet.",
      },
      {
        title: "Residential Roofing",
        img: Residential,
        imgAlt: "Metal Roof",
        describe:
          "There is perhaps no greater investment in your home than a well installed and maintained roof. We can help you select the best roofing material and provide inspections, maintenance, and repairs to keep your home and family safe.",
      },
      {
        title: "Commercial Roofing",
        img: Commercial,
        imgAlt: "Tile Roof",
        describe:
          "Business owners have enough to deal with without worrying about the roof over their heads. We are experts at commercial roof inspection, maintenance, and repair. We understand the unique considerations required to protect your business.",
      },
    ];

    return (
      <div>
        <Jumbotron />
        <MiniContact />
        <Layout>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <p>
                DuraVerde J&N Roofing and Construction is your residential and
                commercial Roofing Contractor serving the needs of Florida. We
                service all types of commercial and residential projects with
                complete knowledge and expertise. Our experience set us apart
                from our competition. We specialized in all types of
                residential, commercial, new, re-roofs and repairs.
              </p>
              <p>
                As a Family owned and operated company, DuraVerde has earned
                reputation for excellence, outstanding customer service and the
                knowledge and expertise. Our dedication to customer satisfaction
                has always been the key to our success. One call to our company,
                and you'll see how our experience makes the difference between
                good and excellent work.
              </p>
            </Col>
            <Col>
              <Image src={ToolBelt} rounded fluid />
            </Col>
          </Row>
          <br />
          <Row>
            <p>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  License Number: #CCC1325941 - Reliable – Our company offers
                  year round roofing and repair services for our clients.
                </ListGroup.Item>
                <ListGroup.Item>
                  Flexible: Fully compliant with your procedures and happy to
                  make any accommodations for your needed roofing repairs and
                  services.
                </ListGroup.Item>
              </ListGroup>
            </p>
          </Row>
        </Layout>
        <div className="section-height h-100">
          <hr />
          <CardColumns>
            {types.map((type, i) => [
              i > 0 && " ",
              <Cards
                key={i}
                title={type.title}
                img={type.img}
                imgAlt={type.imgAlt}
                describe={type.describe}
              />,
            ])}
          </CardColumns>
          <br />
        </div>
      </div>
    );
  }
}
