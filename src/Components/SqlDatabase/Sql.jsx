import React from "react";
import "../OlapData/data.css";
import { sqlData } from "../../dummydata";
import "./sql.css";

const Sql = () => {
  return (
    <>
      <section className="row sql-sec margin-top margin-bottom container">
        <h2 className="title-heading">
          Materialize combines the best of both worlds.
        </h2>
        <p className="large-text">
          Materialize is a fast, distributed SQL database built on streaming
          internals.
        </p>

        <div className="box-container">
          {sqlData.map((val) => (
            <div className="items" key={val.id}>
              <div className="item">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
                <div className="link">
                  <a
                    href="https://materialize.com/blog/next-generation/"
                    className="hover-link"
                  >
                    {val.link}
                    <span>&nbsp;→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="margin-top"></div>
    </>
  );
};

export default Sql;
