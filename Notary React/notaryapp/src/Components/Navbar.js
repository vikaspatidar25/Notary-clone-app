import React from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="header1">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Notary</Link>
            <button
              className="navbar-toggler"
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link home active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/Practice"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Practice Areas
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Practice">Practice Areas</Link></li>
                    <li><Link className="dropdown-item" to="#">Bankruptcy law</Link></li>
                    <li><Link className="dropdown-item" to="#">Business Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Civil Rights Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Criminal Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Immigration Law</Link></li>
                    <li><Link className="dropdown-item" to="#">Family Law</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Testim">Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar