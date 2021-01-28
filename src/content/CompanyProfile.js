import React, { Component } from "react";
import Layout from "../components/Layout";
import MiniContact from "../components/MiniContact";
import "../styles/CompanyProfile.css";

export class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div>
            <h2 className="font-weight-bold">
              About DuraVerde J&N Roofing and Construction
            </h2>
            <hr />
            <br></br>
            <p>
              DuraVerde J&N Roofing and Construction is a locally owned
              full-service Florida Contractor providing commercial and
              residential Roofing Service. We are dedicated to the evaluation,
              installation and maintenance of your roof. Our team are qualified
              to evaluate your roof and will assist you in making the
              appropriate choice of materials and applications.
            </p>
            <p>
              We service commercial and residential roofs with complete
              knowledge and expertise. Our experience and craftsmanship set us
              apart from our competition. We specialize in new roofs, re-roofs,
              tear offs, leaks repairs, and roof decking replacement. We also
              offer roof inspections, roof repairs, and variety of roofing types
              including asphalt roofs, flat roofs, hip roofs, and gable roofs.
            </p>

            <p>
              We also understand that project success and client satisfaction
              are the result of the quality of the final product. Our clients
              can be confident that throughout the entire process, every detail
              will be overseen by experienced professionals.
            </p>
            <p>
              Give DuraVerde J&N Roofing and Construction a call to get a free
              estimate and inspection.
            </p>
          </div>
        </Layout>
        <MiniContact />
        <Layout>
          <div>
            <h2 className="font-weight-bold">DuraVerde Philosophy</h2>
            <hr />
            <br></br>
            <p>
              In an industry known for greedy owners who don’t take care of
              their people and will do anything to squeeze a little more profit
              out of the job, we strive to always be the company that puts our
              people first! As a result, every member of the DuraVerde team
              treats the company and its clients as if they owned it! Being
              successful is fun and we would like to stay that way, so our other
              core guiding philosophy is that integrity is longevity. Anyone can
              make a lot of money in the short term by cutting corners, but what
              you do will always catch up to you eventually. We’d much rather
              just do it right the first time and never have to worry about it!
              If you don’t have time to do something right, you certainly don’t
              have time to come back and do it over again later… So if you have
              an old roof or experienced a significant storm in the last few
              years, sign up for a free inspection today!
            </p>
            <br></br>
          </div>
        </Layout>
      </div>
    );
  }
}
