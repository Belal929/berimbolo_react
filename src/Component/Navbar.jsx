import React from 'react';
import nav from '../img/logo_removebg.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-0 px-4 px-lg-5">
        <Link to='/' className="navbar-brand d-flex align-items-center">
          <img className="nav-logo" src={nav} alt="logo" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-4 py-lg-0">
            <Link to='/' className="nav-item nav-link active">Home</Link>
            <Link to='/About' className="nav-item nav-link">About</Link>
            <Link to='/Service' className="nav-item nav-link">Service</Link>
            <Link to='/Feature' className="nav-item nav-link">Feature</Link>
            <Link to='/Project' className="nav-item nav-link">Project</Link>
            <Link to='/Contact' className="nav-item nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;