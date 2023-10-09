import {Link} from "react-scroll";
import React from "react";
import "./style/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container " >
        <a className="navbar-brand" href="/#">
          Abdelrahman
        </a>
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={ "navbar-nav ms-auto mb-lg-0 "} >
            <li className="nav-item ">
              <Link to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link Link"
                    aria-current="page"
                    >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="about"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500} className="nav-link Link" > About </Link>
            </li>
            <li className="nav-item ">
              <Link to="skills"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500} className="nav-link Link" > Skills </Link>
            </li>
            <li className="nav-item ">
              <Link to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} className="nav-link Link" > Projects </Link>
            </li>
            <li className="nav-item ">
              <Link to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500} className="nav-link Link" > Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
