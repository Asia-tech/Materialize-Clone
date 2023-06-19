import React from "react";
import "./footer.css";
import "../common/btn2/btn2.css";
import link1 from "../../Assets/link1.svg";
import link2 from "../../Assets/link2.svg";
import link3 from "../../Assets/link3.svg";
import link4 from "../../Assets/link4.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          {/* column 1 */}
          <div className="col grid">
            {/* part 1 */}
            <div className="mt-12">
              <h3>our product</h3>
              <ul className="footer-ul">
                <li>
                  <a href="https://materialize.com/customer-stories/">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a href="https://console.materialize.com/account/login">
                    Sign In to Materialize
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/register/">
                    Get Early Access
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/demo/">
                    Get a Demo of Materialize
                  </a>
                </li>
              </ul>
            </div>
            {/* part 2 */}
            <div className="mt-12">
              <h3>DEVELOPER</h3>
              <ul className="footer-ul">
                <li>
                  <a href="https://materialize.com/docs/">Documentation</a>
                </li>
                <li>
                  <a href="https://materialize.com/docs/get-started/">
                    Quick Start
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/docs/get-started/key-concepts/">
                    Key Concepts
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* column 2 */}
          <div className="col grid">
            {/* part 1 */}
            <div className="mt-12">
              <h3>DATA GUIDES</h3>
              <ul className="footer-ul">
                <li>
                  <a href="https://materialize.com/guides/streaming-database/">
                    Streaming Databases
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/guides/materialized-views/">
                    Materialized Views
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/guides/incremental-computation/">
                    Incremental Computation
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/guides/streaming-sql/">
                    Streaming SQL
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/blog/kafka-is-not-a-database/">
                    Kafka is not a Database
                  </a>
                </li>
              </ul>
            </div>
            {/* part 2 */}
            <div className="mt-12">
              <h3>COMPANY</h3>
              <ul className="footer-ul">
                <li>
                  <a href="https://materialize.com/blog/">Blog</a>
                </li>
                <li>
                  <a href="https://materialize.com/events/">Events</a>
                </li>
                <li>
                  <a href="https://materialize.com/careers/">Careers</a>
                </li>
                <li>
                  <a href="https://materialize.com/about/news-and-press/">
                    News & Press
                  </a>
                </li>
                <li>
                  <a href="https://materialize.com/contact/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-right card">
          <h3 className="text-sm">JOIN THE MATERIALIZE COMMUNITY</h3>
          <p>
            Join hundreds of other Materialize users and connect directly with
            our engineers.
          </p>

          <a
            href="https://materializecommunity.slack.com/join/shared_invite/zt-192ge7493-D3iHjhll2rq99uIZUSijfQ#/shared-invite/email"
            className="footer-btn btn"
          >
            JOIN the community
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Materialize, Inc. Terms of Service | Privacy Policy</p>
        <div className="social-link">
          <a
            className="footer-link"
            href="https://join.slack.com/t/materializecommunity/shared_invite/zt-192ge7493-D3iHjhll2rq99uIZUSijfQ"
          >
            <img src={link1} alt="materialize Chat" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/company/materializeinc/about/"
          >
            <img src={link2} alt="materialize Linked-in" />
          </a>
          <a className="footer-link" href="https://twitter.com/materializeinc">
            <img src={link3} alt="materialize twitter" />
          </a>
          <a
            className="footer-link"
            href="https://github.com/MaterializeInc/materialize"
          >
            <img src={link4} alt="materialize Github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
