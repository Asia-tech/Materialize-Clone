import React, { useState } from "react";
import { TableData } from "./../../dummydata";
import "./table.css";

const Toggle = () => {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

  return (
    <div className="toggle-sec">
      <div className="container">
        {TableData.map((val, index) => (
          <div className="box" key={index}>
            <button className="accordion" onClick={() => toggle(index)}>
              <h2 className="toggle-heading">{val.title}</h2>
              <span className="span">
                {click === index ? null : (
                  <i className="fa fa-chevron-down"></i>
                )}
              </span>
            </button>
            {click === index && (
              <div className="text">
                <p>{val.desc}</p>
                <div className="button-wrapper">
                  <a
                    href="https://materialize.com/docs/get-started/"
                    className="toggle-btn"
                  >
                    {val.link}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toggle;
