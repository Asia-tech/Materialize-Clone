import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import "../common/btn2/btn2.css";

const Btn3 = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="btn-sec flex">
      <div className="button-wrapper hero-wrapper">
        <a
          href="https://materialize.com/register/"
          className="primary-btn btn hero-btnsec flex"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span>Try Free</span>
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
          href="https://materialize.com/demo/"
          className="btn ctn-btn hero-btn"
        >
          <span>get started</span>
        </a>
        <div className="button-bg"></div>
      </div>
    </div>
  );
};

export default Btn3;
