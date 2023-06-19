import React from "react";
import Title from "./../common/title/Title";
import "./material.css";
import Btn3 from "./Btn3";

const Material = () => {
  return (
    <>
      <section className="material-sec  margin-top margin-bottom">
        <Title className="span-heading" title="Try Materialize " span="Free" />
        <p className="text-medium">
          Get hands-on with Materialize in a 14-day Free Trial. Bring your own
          data, or use data sources we provide.
        </p>
        <div className="btn-div ">
          <Btn3 />
        </div>
      </section>
    </>
  );
};

export default Material;
