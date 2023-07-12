import React, { useState, useEffect } from "react";
import "./TopNav.css";

const TopNav = () => {
  const [isBreakpointApplied, setIsBreakpointApplied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const minWidth = 768;
      if (window.innerWidth >= minWidth) {
        setIsBreakpointApplied(true);
      } else {
        setIsBreakpointApplied(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-nav flex">
      {isBreakpointApplied ? (
        <p>
          🏙️💻 NYC Hack Day 7/14 - Join us for an intro to Materialize and some
          hands-on hacking! &nbsp;
          <a href="https://www.eventbrite.com/e/hack-day-at-materialize-tickets-658519598847?aff=oddtdtcreator">
            Register
          </a>
          .
        </p>
      ) : (
        <p>
          Materialize NYC Hack Day 7/14 <a href="/">More</a>.
        </p>
      )}
    </div>
  );
};
export default TopNav;
