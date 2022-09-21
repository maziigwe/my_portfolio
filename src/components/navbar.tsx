import React from 'react'
//import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark _navbar">
      <a className="navbar-brand mx-2" href="#">
        IGWE ACHA
      </a>
      <button
        className="navbar-toggler mx-2 _navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse _collapsable" id="navbarText">
        <ul className="navbar-nav mr-auto main-list">
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
                <i className="bi bi-github text-white"></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i className="bi bi-twitter text-white"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#linkedl">
                <i className="bi bi-linkedin text-white "></i>
                <span>Linkedln</span>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
