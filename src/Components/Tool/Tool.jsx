import React from "react";
import "./tool.css";

const Tool = () => {
  return (
    <>
      <section className="row container section tool-sec ">
        <h2 className="title-heading">
          Traditional tools don't meet the requirements.
        </h2>
        <div className="text-container flex tool-row">
          <div className="left-box">
            <p>
              <strong>Cloud Warehouses are easy,</strong> but they get expensive
              when run continuously, and hit hard limits on latency and
              concurrency.
            </p>
          </div>
          <div className="left-box">
            <p>
              <strong>Stream Processors are fast</strong> , but they're a
              low-level tool, using them has a high-engineering cost, and
              results in complex architectures.
            </p>
          </div>
        </div>
      </section>
      <div className="margin-top"></div>
    </>
  );
};

export default Tool;
