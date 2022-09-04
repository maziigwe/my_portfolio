import React from 'react'
// import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        IGWE ACHA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="#">
            Projects
          </a>
          <a className="nav-item nav-link" href="#">
            Social media
          </a>
          <a className="nav-item nav-link btn btn-primary text-white" href="#">
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
}
