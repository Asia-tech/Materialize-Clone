import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import "./btn2.css";

const Btn2 = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="btn-sec flex">
      <div className="button-wrapper hero-wrapper">
        <a
          href="https://materialize.com/demo/"
          className="primary-btn btn hero-btnsec flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>GET a demo</span>
          {isHovering ? (
            <HiArrowRight className="icon btn-icon" />
          ) : (
            <AiOutlineRight className="icon btn-icon" />
          )}
        </a>
        <div className="button-bg"></div>
      </div>
      <div className="button-wrapper hero-wrapper">
        <a
          href="https://materialize.com/regiaster/"
          className="btn ctn-btn hero-btn"
        >
          <span>get started</span>
        </a>
        <div className="button-bg"></div>
      </div>
    </div>
  );
};

export default Btn2;
