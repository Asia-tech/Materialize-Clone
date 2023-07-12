import React from "react";
import Title from "./../common/title/Title";
import "./data.css";
import { olapData } from "./../../dummydata";

const Data = () => {
  return (
    <>
      <section className=" section margin-top container olap-sec">
        <Title
          className="span-heading top-heading"
          subtitle="why materialize?"
          title="New Use Cases in OLAP need "
          span="Correct, Up-To-Date Data."
          text="Fresh, correct and consistent data is a prerequisite to operationalizing OLAP data in your business."
        />
        <div className="box-container row">
          {olapData.map((val) => {
            return (
              <div className="items" key={val.id}>
                <div className="item">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2 className="h4">{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                  <div className="link">
                    <a
                      href="https://materialize.com/use-cases/real-time-analytics/"
                      className="hover-link"
                    >
                      {val.link}
                      <span>&nbsp;→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="margin-top"></div>
    </>
  );
};

export default Data;
