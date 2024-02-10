import React from "react";
import "../assets/style/style.css";
import { Link, useNavigate } from "react-router-dom";

export const UserNav = ({ username }) => {
  const navigate = useNavigate();
  const check = sessionStorage.getItem("isLoggedIn");

  const Logout = () => {
    alert("LoggedOut");
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          DRINKPASS
        </Link>
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
              {check ? (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/user-home"}
                >
                  Home
                </Link>
              ) : (
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin-login"}>
                Admin
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/restaurant-login"}>
                Restaurants
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
          {check ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 second-nav">
              <li className="nav-item regis-btn">
                <button className="nav-link register-nav" href="#">
                  {username}
                </button>
              </li>

              <li className="nav-item regis-btn">
                <button
                  className="nav-link register-nav"
                  href="#"
                  onClick={Logout}
                >
                  <span className="fa-solid fa-power-off fa-xl"></span>
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 second-nav">
              <li className="nav-item ">
                <Link className="nav-link login-nav" to={"/user-login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item regis-btn">
                <Link
                  type="button"
                  className="nav-link register-nav btn btn-primary border-0 rounded-0"
                  to={"/user-register"}
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
