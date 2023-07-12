import React from "react";
import "./hero.css";
import Btn2 from "./../../common/btn2/Btn2";

const Hero = () => {
  return (
    <>
      <section className="hero section row ">
        <div className="container">
          <h1 className="h1">
            The Cloud Database for
            <br />
            <span className="text-gradient">Fast-Changing Data.</span>
          </h1>
          <p className="mx-auto">
            We put a streaming engine in a database, so your team can build
            real-time data products without the cost, complexity, and
            development time of stream processing.
          </p>
          <div className="btn-div flex">
            <Btn2 />
          </div>
        </div>
        <div className="margin-top"></div>
      </section>
    </>
  );
};

export default Hero;
