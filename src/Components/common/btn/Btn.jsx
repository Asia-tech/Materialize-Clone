import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai";

const Btn = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
      <a
        href="https://materialize.com/register/"
        className="primary-btn btn flex"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <span>try free</span>
        {isHovering ? (
          <AiOutlineArrowRight className="icon btn-icon" />
        ) : (
          <AiOutlineRight className="icon btn-icon" />
        )}
      </a>
    </div>
  );
};

export default Btn;
