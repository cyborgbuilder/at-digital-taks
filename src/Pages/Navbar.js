import React, { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ openModal }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [show, handleShow] = useState(false);

  const trasnitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", trasnitionNavBar);
    return () => window.removeEventListener("scroll", trasnitionNavBar);
  }, []);

  return (
    <header>
      <div className={`wrapper ${show && "nav_white"}`}>
        <img src="./logo.png" alt="Logo" />
        <div>
          <nav ref={navRef}>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/works">Careers</Link>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <span>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
