import React, { useEffect } from "react";
import "../assets/style/adminStyle.css";
import cafe from "../assets/images/cafe.ico";
import Aos from "aos";
import { Link, useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();
  const check = sessionStorage.getItem("adminIsLoggedIn");

  if (!check) {
    navigate("/");
  }

  const logoutHandler = () => {
    alert("LoggedOut");
    sessionStorage.removeItem("adminIsLoggedIn");
    navigate("/");
  };

  return (
    <>
      <section className="admin-bg">
        <div className="container">
          <div className="container-fluid dashboard-style">
            <div className="row">
              <div className="col-sm-3 mt-3">
                <Link to="/restaurants" style={{ textDecoration: "none" }}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card shadow rounded p-3 card-bg text-center"
                  >
                    <span>
                      <i className="fa-solid fa-utensils fa-2xl"></i>
                    </span>
                    <div className="card-body">
                      <h3>Resturants</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3 mt-3">
                <Link to="/users" style={{ textDecoration: "none" }}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card shadow rounded p-3 card-bg text-center"
                  >
                    <span>
                      <i className="fa-solid fa-users fa-2xl"></i>
                    </span>

                    <div className="card-body">
                      <h3>Users</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3 mt-3">
                <Link to={"/admin-response"} style={{ textDecoration: "none" }}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card shadow rounded p-3 card-bg text-center"
                  >
                    <span>
                      <i className="fa-solid fa-reply fa-2xl"></i>
                    </span>

                    <div className="card-body">
                      <h3>Response</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3 mt-3">
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={logoutHandler}
                >
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card shadow rounded p-3 card-bg text-center"
                  >
                    <span>
                      <i className="fa-solid fa-right-from-bracket fa-2xl"></i>
                    </span>

                    <div className="card-body">
                      <h3>Logout</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
