import React from "react";
//import '../styles/navbar.css'

export const Navbar = () => {
  return (
    // <div className="container shadow-sm ">
    <nav className="navbar navbar-expand-lg _navbar ">
      <a className="navbar-brand mx-4 " href="#">
        <h3>IGWE ACHA</h3>
      </a>

      <button
        className="d-flex d-lg-none collapsed mx-3 flex-column justify-content-around _navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon top-bar "></span>
        <span className="toggler-icon middle-bar "></span>
        <span className="toggler-icon bottom-bar "></span>
      </button>

      <div className="collapse navbar-collapse _collapsable" id="navbarText">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Skills
            </a>
          </li>
        </ul>

        <ul className="navbar-text d-flex justify-content-start my-2 social-links">
          <li className="mx-1">
            <a href="#github">
              <i className="bi bi-github mx-1"></i>
              <span>Github</span>
            </a>
          </li>
          <li className="mx-1">
            <a href="#twitter">
              <i className="bi bi-twitter mx-1"></i>
              <span>Twitter</span>
            </a>
          </li>
          <li className="mx-1">
            <a href="#linkedl">
              <i className="bi bi-linkedin mx-1"></i>
              <span>Linkedln</span>
            </a>
          </li>
          <li className="mx-1">
            <a href="#whatsapp">
              <i className="bi bi-whatsapp mx-1"></i>
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>

        <div className="mx-lg-5 d-flex align-items-center switch-toggle">
          <i className="bi bi-toggle-on"></i>
          <span className="mx-1">Dark Theme</span>
        </div>
      </div>
    </nav>
    // </div>
  );
};
