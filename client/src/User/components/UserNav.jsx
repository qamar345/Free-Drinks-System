import React from "react";
import "../assets/style/style.css";

export const UserNav = () => {
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          DRINKPASS
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 user-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
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
                How It Works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 second-nav">
            <li className="nav-item ">
              <a className="nav-link login-nav" href="#">
                Login
              </a>
            </li>
            <li className="nav-item regis-btn">
              <button className="nav-link register-nav" href="#">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
