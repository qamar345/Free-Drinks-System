import React, { useEffect } from "react";
import "../assets/style/adminStyle.css";
import cafe from "../assets/images/cafe.ico";
import Aos from "aos";

export const AdminDashboard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section className="admin-bg">
        <div className="container">
          <div className="container-fluid dashboard-style">
            <div className="row">
              <div className="col-sm-3 mt-3">
                <a href="" style={{ textDecoration: "none" }}>
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
                </a>
              </div>
              <div className="col-sm-3 mt-3">
                <a href="" style={{ textDecoration: "none" }}>
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
                </a>
              </div>
              <div className="col-sm-3 mt-3">
                <a href="" style={{ textDecoration: "none" }}>
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
                </a>
              </div>
              <div className="col-sm-3 mt-3">
                <a href="" style={{ textDecoration: "none" }}>
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
                </a>
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