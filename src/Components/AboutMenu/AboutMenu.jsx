import React, { useState } from "react";
import "../Navbar/navbar.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import streamImg from "../../Assets/Why-Use-Materialized-View.webp";
import img8 from "../../Assets/img8.svg";
import img9 from "../../Assets/img9.svg";
import img10 from "../../Assets/img10.svg";
import img11 from "../../Assets/img11.svg";
import img12 from "../../Assets/img12.svg";
import img13 from "../../Assets/img13.svg";
import img14 from "../../Assets/img14.svg";
import "../Navbar/dropdown.css";
import "./aboutMenu.css";

const AboutMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="navItem nav-list-menu">
      <a href="/" className="navLink" onClick={toggleDropdown}>
        <span>About</span>
        {isActive ? (
          <AiOutlineUp className="icon" />
        ) : (
          <AiOutlineDown className="icon" />
        )}
      </a>
      {isActive && (
        <div className="drop-down">
          <div className="dropdown-wrapper">
            <div className="dropdown-item flex">
              <div className="img-box drop-col">
                <h3 className="item-heading">Featured Content</h3>
                <div className="img-stream">
                  <img src={streamImg} alt="stream database " />
                  <div className="database-text">
                    <h3>What is streaming database?</h3>
                    <p>
                      Get an overview of how streaming databases differ from
                      traditional DBs.What are the treadoffs? How are they ued?
                    </p>
                  </div>
                </div>
              </div>
              <div className="left-col drop-col">
                <h3 className="item-heading">company</h3>
                <div className="links">
                  <a href="https://materialize.com/about/">
                    <img src={img8} alt="about us" />
                    <span>About us</span>
                  </a>
                  <a href="https://materialize.com/careers/">
                    <img src={img9} alt="careers" />
                    <span>careers</span>
                  </a>
                  <a href="https://materialize.com/about/news-and-press/">
                    <img src={img10} alt="news-and-press" />
                    <span>news & press</span>
                  </a>
                  <a href="https://materialize.com/contact/">
                    <img src={img11} alt="contact us" />
                    <span>contact us</span>
                  </a>
                </div>
              </div>
              {/* 2nd column */}
              <div className="right-col drop-col">
                <h3 className="item-heading">Learn</h3>
                <div className="links">
                  <a href="https://materialize.com/blog/">
                    <img src={img12} alt="Blog" />
                    <span>Blog</span>
                  </a>
                  <a href="https://materialize.com/events/">
                    <img src={img13} alt="Events" />
                    <span>Events</span>
                  </a>
                  <a href="https://materialize.com/guides/">
                    <img src={img14} alt="guides" />
                    <span>guides</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default AboutMenu;
