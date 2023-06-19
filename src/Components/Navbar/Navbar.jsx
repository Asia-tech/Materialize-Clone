import React, { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../Assets/materialize-white-logo.png";
import "./navbar.css";
import TopNav from "./../topNav/TopNav";
import Btn from "./../common/btn/Btn";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="navBarSection">
      <TopNav
        text="❓ When to use Materialize vs a Stream Processor? Read the Guide."
        smallText="Guide: Materialize or Stream Processor More ."
        breakPoint={768}
      />
      <nav>
        <header className={`header flex wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="logoDiv">
            <a href="/" className="logo flex">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className={`navBar ${showNav ? "activeNavbar" : ""}`}>
            <ul className="navLists flex">
              <div className="n-list flex">
                <li className="navItem">
                  <a href="https://materialize.com/docs" className="navLink">
                    Docs
                  </a>
                </li>

                <li className="navItem">
                  <a href="/" className="navLink">
                    <span>Product</span>
                    <AiOutlineDown className="icon" />
                  </a>
                </li>

                <li className="navItem">
                  <a
                    href="https://materialize.com/pricing/"
                    className="navLink"
                  >
                    <span>Pricing</span>
                  </a>
                </li>

                <li className="navItem">
                  <a href="https://materialize.com/blog/" className="navLink">
                    <span>Blog</span>
                  </a>
                </li>

                <li className="navItem">
                  <a href="/" className="navLink">
                    <span>About</span>
                    <AiOutlineDown className="icon" />
                  </a>
                </li>
              </div>
              <div className="btn-link flex">
                <li className="navItem">
                  <a
                    href="https://console.materialize.com/account/login"
                    className="navLink"
                  >
                    Sign In
                  </a>
                </li>
                <Btn className="btn" />
              </div>
            </ul>
          </div>

          <div onClick={toggleNav} className="toggleNavbar">
            {showNav ? (
              <AiOutlineClose className="icon" />
            ) : (
              <AiOutlineMenu className="icon" />
            )}
          </div>
        </header>
      </nav>
    </section>
  );
};

export default Navbar;
