import React, { useEffect } from "react";
import Aos from "aos";
import "../assets/style/resturantStyle.css";
import { Link, useNavigate } from "react-router-dom";

export const ResturantDashboard = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const check = sessionStorage.getItem("RisLoggedIn");
  const username = sessionStorage.getItem("Rname");

  if (!check) {
    navigate("/");
  }

  const Logout = () => {
    sessionStorage.removeItem("RisLoggedIn");
    alert("LoggedOut");
  };

  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid restu-dashboard-style">
            <div className="row">
              <div className="col-sm-3 mt-3">
                <Link to={"/add-restaurant"} style={{ textDecoration: "none" }}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card shadow rounded p-3 card-bg text-center"
                  >
                    <span>
                      <i className="fa-solid fa-plus fa-2xl"></i>
                    </span>
                    <div className="card-body">
                      <h3>Add Cafe</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3 mt-3">
                <Link to={"/add-menu"} style={{ textDecoration: "none" }}>
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card shadow rounded p-3 card-bg text-center"
                  >
                    <span>
                      <i className="fa-solid fa-list fa-2xl"></i>
                    </span>
                    <div className="card-body">
                      <h3>Add Menu</h3>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-sm-3 mt-3">
                <Link to={"/response"} style={{ textDecoration: "none" }}>
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
                <Link onClick={Logout} style={{ textDecoration: "none" }}>
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
