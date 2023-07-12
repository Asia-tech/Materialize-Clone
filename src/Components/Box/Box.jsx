import React from "react";
import "./box.css";

const Box = () => {
  return (
    <section className="row box-sec margin-top margin-bottom">
      <div>
        <div className="box-container">
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Presents as PostgreSQL</h3>
              <p>
                Manage and query Materialize using any
                <a href="https://materialize.com/docs/integrations/">
                  Postgres driver or tool
                </a>
                .
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Streaming Inputs</h3>
              <p>
                Pull in streams of data from{" "}
                <a href="https://materialize.com/docs/integrations/">Kafka</a>{" "}
                or stream from{" "}
                <a href="https://materialize.com/docs/sql/create-source/postgres/">
                  Postgres
                </a>{" "}
                via replication.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Built for JOINs</h3>
              <p>
                Multi-way, complex{" "}
                <a href="https://materialize.com/docs/transform-data/join/">
                  join
                </a>{" "}
                support across real-time streams - all in standard SQL.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Active Replication</h3>
              <p>
                Use replication to increase availability, reduce downtime, scale
                seamlessly.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Low-Latency Serving Layer</h3>
              <p>
                Results can be maintained in memory, making read latency similar
                to Redis.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Event-Driven Primitives</h3>
              <p>
                <a href="https://materialize.com/docs/get-started/key-concepts/#sinks">
                  Sink
                </a>{" "}
                changes out to Kafka, or&nbsp;
                <a href="https://materialize.com/docs/sql/subscribe/">
                  subscribe
                </a>{" "}
                to query updates in standard Postgres.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="h4">Secure and Compliant</h3>
              <p>
                <a href="https://materialize.com/security/">
                  SOC 2 Type 2 compliant
                </a>
                , encrypted at rest,
                <a href="https://materialize.com/security/">
                  secure connectivity
                </a>
                to your infra.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-sec">
          <div className="button-wrapper">
            <a href="https://materialize.com/docs/" className="btn ctn-btn">
              <span>read the docs</span>
            </a>
            <div className="button-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
