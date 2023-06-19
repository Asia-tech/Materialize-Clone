import React, { useState, useEffect } from "react";
import "./TopNav.css";

const TopNav = (props) => {
  const [text, setText] = useState(props.text);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < props.breakPoint) {
        setText(props.smallText);
      } else {
        setText(props.text);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.breakPoint, props.smallText, props.text]);

  return (
    <div className="top-nav">
      <p>{text}</p>
    </div>
  );
};

export default TopNav;
