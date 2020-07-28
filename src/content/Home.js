import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import "../styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Layout>
          <div>*Component for Free Estimate Contact Form*</div>
          <p>
            something small about being the right roofer. Yes! There Really Is a
            Difference if You Hire the Right Roofing Contractor!
            <br />
            Fully licensed, bonded and insured with industry-leading
            manufacturer and labor warranties.
            <br />
            The best customer service in the business, no joke!
            <br />
            Fantastic financing options including low interest, long-term loans
            and zero-down, same-as-cash offers.
            <br />
            The highest quality roofing products and certified, factory-trained
            roof technicians on every project with safety as our top priority.
            <br />
            You need a roof? we can handle it! We specialize in both residential
            and commercial roofing.
            <br />
            Synthetic Tile
            <br />
            Both beautiful and functional.
            <br />
            Flat Roofing
            <br />
            Also known as low-slope roofing.
            <br />
            Concrete & Clay Tile
            <br />
            Long lasting benefits in harsh climates.
            <br />
            Metal
            <br />
            Long lasting benefits in harsh climates.
            <br />
          </p>
        </Layout>
      </div>
    );
  }
}
