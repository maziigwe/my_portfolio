import React from 'react'
//import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg _navbar">
      <a className="navbar-brand mx-2 " href="#">
        <h3>IGWE ACHA</h3>
      </a>

      <button
        className="d-flex d-lg-none mx-2 flex-column justify-content-around _navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon tob-bar "></span>
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
        <span className="navbar-text justify-content-end social-links ">
          <ul>
            <li>
              <a href="#github">
                <i className="bi bi-github "></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i className="bi bi-twitter "></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#linkedl">
                <i className="bi bi-linkedin "></i>
                <span>Linkedln</span>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
