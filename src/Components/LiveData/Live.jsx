import React from "react";
import Title from "./../common/title/Title";
import "./live.css";
import img5 from "../../Assets/abstract-streaming.webp";
import img6 from "../../Assets/abstract-materialize.webp";
import img7 from "../../Assets/abstract-cdc.webp";
import img8 from "../../Assets/abstract-updates.webp";

const Live = () => {
  return (
    <>
      <section className=" container live-sec">
        <Title
          className="span-heading"
          title="Empower your Team to "
          span="Build Confidently With Live Data."
        />
        <div className="mtop row">
          <div className="live-container ">
            {/*  ---- 1st box ---- */}
            <div className="live-box">
              <div className="img-div">
                <img src={img5} alt="Abstract streaming" />
              </div>
              <div className="text-div">
                <span className="span-heading">WORLD-CLASS TECHNOLOGY</span>
                <h2 className="h4">Streamline solutions to hard problems.</h2>
                <p>
                  Materialize is built from the ground up to deliver where
                  others have fallen short: &nbsp;
                  <strong>incremental view maintenance</strong> that doesn't
                  sacrifice <strong>consistency and correctness</strong>, and
                  without limits on SQL complexity.
                </p>
                <div className="link">
                  <a
                    href="https://materialize.com/blog/eventual-consistency-isnt-for-streaming/"
                    className="hover-link"
                  >
                    Consistency in Streaming
                    <span>&nbsp;→</span>
                  </a>
                </div>
              </div>
            </div>
            {/*  ---- 2nd box ---- */}
            <div className="live-box">
              <div className="img-div">
                <img src={img6} alt="Abstract Materialize" />
              </div>
              <div className="text-div">
                <span className="span-heading">INTEGRATED AND COMPATIBLE</span>
                <h2 className="h4">Keep the stack and workflows you love.</h2>
                <p>Get new capabilities without disruptive changes:</p>
                <ul>
                  <li>
                    <a href="https://materialize.com/docs/sql/create-source/postgres/">
                      PostgreSQL Source
                    </a>
                  </li>
                  <li>
                    <a href="https://materialize.com/docs/sql/create-source/kafka/">
                      Kafka Sources and Sinks
                    </a>
                  </li>
                  <li>
                    <a href="https://materialize.com/integrations/dbt/">
                      dbt Adapter
                    </a>
                  </li>
                  <li>
                    <a href="https://materialize.com/blog/postgres-compatibility/">
                      PG Wire Compatibility
                    </a>
                  </li>
                </ul>

                <div className="link">
                  <a
                    href="https://materialize.com/docs/integrations/"
                    className="hover-link"
                  >
                    View All Integrations
                    <span>&nbsp;→</span>
                  </a>
                </div>
              </div>
            </div>
            {/*  ---- 3rd box ---- */}
            <div className="live-box">
              <div className="img-div">
                <img src={img7} alt="abstract cdc" />
              </div>
              <div className="text-div">
                <span className="span-heading">STANDARD SQL</span>
                <h2 className="h4">Replace bespoke architectures with SQL.</h2>
                <p>
                  Save your stream processor for the most complex use cases,
                  everything else can be SQL queries.
                </p>
              </div>
            </div>
            {/*  ---- 4th box ---- */}
            <div className="live-box">
              <div className="img-div">
                <img src={img8} alt="Abstract Updates" />
              </div>
              <div className="text-div">
                <span className="span-heading">CLOUD ARCHITECTURE</span>
                <h2 className="h4">Make fresh data accessible across teams.</h2>
                <p>Run multiple workloads on the same data with ease:</p>
                <ul>
                  <li>
                    <strong>Shared Storage:</strong> access the same raw data,
                    updated continually.
                  </li>
                  <li>
                    <strong>Isolation of Compute:</strong> develop without
                    resource contention.
                  </li>
                </ul>

                <div className="link">
                  <a
                    href="https://materialize.com/blog/next-generation/"
                    className="hover-link"
                  >
                    Materialize Architecture Explained
                    <span>&nbsp;→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Live;
