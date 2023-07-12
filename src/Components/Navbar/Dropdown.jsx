import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import img1 from "../../Assets/why.svg";
import img2 from "../../Assets/customer.svg";
import img3 from "../../Assets/changelog.svg";
import img4 from "../../Assets/time.svg";
import img5 from "../../Assets/alert.svg";
import img6 from "../../Assets/segment.svg";
import img7 from "../../Assets/machine.svg";
import "./dropdown.css";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="navItem nav-list-menu">
      <a href="/" className="navLink" onClick={toggleDropdown}>
        <span>Product</span>
        {isActive ? (
          <AiOutlineUp className="icon" />
        ) : (
          <AiOutlineDown className="icon" />
        )}
      </a>
      {isActive && (
        <div className="drop-down">
          <div className="dropdown-wrapper">
            <div className="dropdown-item ">
              <div className="left-col drop-col ">
                <h3 className="item-heading">Our Product</h3>
                <div className="links">
                  <a href="https://materialize.com/#why">
                    <img src={img1} alt="why" />
                    <span>why materialize</span>
                  </a>
                  <a href="https://materialize.com/#why">
                    <img src={img2} alt="customers stories" />
                    <span>customers stories</span>
                  </a>
                  <a href="https://materialize.com/#why">
                    <img src={img3} alt="changelog" />
                    <span>changelog</span>
                  </a>
                </div>
              </div>
              {/* 2nd column */}
              <div className="right-col drop-col">
                <h3 className="item-heading">use cases</h3>
                <div className="links">
                  <a href="https://materialize.com/#why">
                    <img src={img4} alt="real-time analytics" />
                    <span>real-time analytics</span>
                  </a>
                  <a href="https://materialize.com/#why">
                    <img src={img5} alt="Automation & Alerting" />
                    <span>Automation & Alerting</span>
                  </a>
                  <a href="https://materialize.com/#why">
                    <img src={img6} alt="Segmentation & personalization" />
                    <span>Segmentation & personalization</span>
                  </a>
                  <a href="https://materialize.com/#why">
                    <img src={img7} alt="Machine Learning Operations" />
                    <span>Machine Learning Operations</span>
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

export default Dropdown;
