import React from 'react'
//import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark _navbar">
      <a className="navbar-brand" href="#">
        IGWE ACHA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarText">
        <ul className="navbar-nav mr-auto">
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
            <li>Github</li>
            <li>Twitter</li>
            <li>Linkedln</li>
          </ul>
        </span>
      </div>
    </nav>
  );
}
