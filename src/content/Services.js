import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Asphalt from "../assets/asphalt.jpg";
import Gutters from "../assets/gutters.jpg";
import Metal from "../assets/metal-roof.jpg";
import NewRoof from "../assets/newroof.jpg";
import Repair from "../assets/repairshome.jpg";
import Shingle from "../assets/shingle-roof.jpg";
import Synthetic from "../assets/synthetic.jpg";
import Tile from "../assets/tile-roof.jpg";
import TPO from "../assets/tpo.jpg";
import Cards from "../components/Cards";
import Layout from "../components/Layout";
import MiniContact from "../components/MiniContact";
import "../styles/About.css";

export default class About extends Component {
  render() {
    const roofs = [
      {
        title: "Shingle ",
        img: Asphalt,
        imgAlt: "A House with shingles type of roof",
        details:
          "Cost-effective • Durable • Variety of Colors and Styles • Suitable to Wide Range of Temperatures",
      },
      {
        title: "Metal ",
        img: Metal,
        imgAlt: "Metal Roof",
        details:
          "Low Maintenance • Environmentally Friendly • Energy Efficient • Can Be Repainted",
      },
      {
        title: "Tile ",
        img: Tile,
        imgAlt: "Tile Roof",
        details:
          "Durable • Variety of Colors and Styles • Maintain Color • Limited Maintenance",
      },
      {
        title: "Synthetic Tile ",
        img: Synthetic,
        imgAlt: "Slate Roof",
        details:
          "Natural Appearance • Fire Resistance • Low Maintenance • Long Life Expectancy",
      },
      {
        title: "TPO ",
        img: TPO,
        imgAlt: "TPO Roof",
        details:
          "Cost-effective • Durable • Energy Efficient • Corrosion and Mold Resistant",
      },
    ];

    return (
      <div>
        <Layout>
          <h2 className="font-weight-bold">Services and Roof Types</h2>
          <p>
            From roofing and gutters to repairs and skylights, DuraVerde Roofing
            is a full-service contractor serving a multitude of different
            roof types.
          </p>
          <hr />
          <br />
          <h3 className="font-weight-bold">Roofing Services</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>Re-Roof</h4>
              <Row xs={1} md={2} lg={2}>
                <Col>
                  <p>
                    New Roof? No Problem! While all roofs have limited
                    lifespans, DuraVerde Roofing will always work to ensure you get the
                    most out of your current roof. Should damage or wear be
                    extensive or beyond repair, a replacement will be proposed.
                    The team at DuraVerde Roofing can guide you in selecting the best roof
                    type for your home or business, based on functional needs,
                    code requirements, and aesthetic preference. Our team has
                    members that are skilled in the installation of all roof
                    types, and each new roof is installed to ensure its long
                    term success, keeping your property safe.
                  </p>
                </Col>
                <Col>
                  <Image
                    src={Shingle}
                    rounded
                    fluid
                    alt="Roof with shingles on it that has been replaced"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>New Roof</h4>
              <Row xs={1} md={2} lg={2}>
                <Col>
                  <Image src={NewRoof} rounded fluid alt="A brand new roof" />
                </Col>
                <Col>
                  <p>
                    DuraVerde knows that you want your new roof to be durable as
                    well as beautiful. With our expertise and the quality
                    roofing products we provide, you can rest assured that your
                    residential roofing project will be all you hope for and
                    more! DuraVerde has the organization, tools, and knowledge to
                    ensure that your new roof is completed on time, within
                    budget, and meets your expectations. Our team takes pride to
                    ensure quality and satisfaction in our roofs.
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Repairs</h4>
              <Row xs={1} md={2} lg={2}>
                <Col>
                  <p>
                    Leaks, holes, and missing shingles can happen especially
                    after a strong Floirda's storm. DuraVerde is here to help to
                    ensure you stay dry a little longer. We'll get the job done
                    efficiently and correctly, ensuring your roofing problems
                    are taken care of with precision for long lasting results.
                    If you sense that roof repairs are needed, don't ignore it.
                    Neglecting to have your Florida roof repaired in a timely
                    manner will translate into more costly repairs later. Roofs
                    are built to last, but without the proper repairs and
                    maintenance, even the best roof can suffer irreparable
                    damages. Call DuraVerde J&N Roofing and Construction for a
                    free inspection.
                  </p>
                </Col>
                <Col>
                  <Image
                    src={Repair}
                    rounded
                    fluid
                    alt="roof undergoing repairs with one roofer fixing a skylight"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Gutters</h4>
              <Row xs={1} md={2} lg={2}>
                <Col>
                  <Image
                    src={Gutters}
                    rounded
                    fluid
                    alt="gutters attached to a home"
                  />
                </Col>
                <Col>
                  <p>
                    Gutters may not be the most exciting project for your home,
                    but installing a seamless gutter system is an economical and
                    important home improvement that can offer you significant
                    protection. Properly installed gutters keep damaging water
                    away from your roof, your house or business and its
                    foundation. This includes keeping moisture away from
                    anywhere it shouldn't be. DuraVerde has a full-service,
                    custom-made, rain gutter and downspout team offering
                    hand-crafted,seamless and pre-painted aluminum including
                    custom flashings and a variety of custom gutter profiles.
                    Call DuraVerde to get a free quote today.
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Layout>
        <MiniContact />
        <Layout>
          <h3 className="font-weight-bold">
            No Matter the Type of Roof, We've Got you Covered.
          </h3>
          <CardColumns>
            {roofs.map((roof, i) => [
              i > 0 && " ",
              <Cards
                key={i}
                title={roof.title}
                img={roof.img}
                imgAlt={roof.imgAlt}
                describe={roof.details}
              />,
            ])}
          </CardColumns>
        </Layout>
        <MiniContact />
      </div>
    );
  }
}
