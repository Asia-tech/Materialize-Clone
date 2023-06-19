import React from "react";
import "./title.css";

const Title = ({ subtitle, title, span, text }) => {
  return (
    <div>
      <div id="heading">
        <span className="subtitle">{subtitle}</span>
        <h2 className="title-heading">
          {title}
          <span className="text-gradient">{span}</span>
        </h2>
        <p className="large-text">{text}</p>
      </div>
    </div>
  );
};

export default Title;
