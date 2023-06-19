import React from "react";
import "../common/btn2/btn2.css";
import "./table.css";
import tableImage from "../../Assets/table.png";
import Toggle from "./Toggle";

const Table = () => {
  return (
    <>
      <section className="section container table-sec margin-bottom">
        <h2 className="title-heading">Managed in standard SQL</h2>
        <div className="table-container flex">
          <p className="large-text">
            Give your team streaming data capabilities without changing their
            language or workflow.
          </p>
          <div className="table-container flex">
            <Toggle />
            <img src={tableImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
