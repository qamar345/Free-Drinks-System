import React, { useEffect } from "react";
import Aos from "aos";
import "../assets/style/resturantStyle.css";

export const ResturantDashboard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid restu-dashboard-style">
            <div className="row">
              <div className="col-sm-4 mt-3">
                <a href="" style={{ textDecoration: "none" }}>
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
                </a>
              </div>

              <div className="col-sm-4 mt-3">
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
              <div className="col-sm-4 mt-3">
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
