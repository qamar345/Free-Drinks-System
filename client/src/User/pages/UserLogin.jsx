import React, { useEffect } from "react";
import "../assets/style/style.css";
import drink0 from "../assets/images/drinks-0.webp";
import AOS from "aos";

export const UserLogin = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="background-bg">
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3"></div>
              <div
                data-aos="flip-up"
                data-aos-duration="1500"
                className="col-sm-6"
              >
                <div className="shadow rounded p-3 login-form">
                  <h3 className="text-center" style={{ color: "white" }}>
                    Login
                  </h3>
                  <br />
                  <div className="row">
                    <div className="col-sm-5">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>

                    <div className="col-sm-5 mobile-view">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>

                    <div className="col-sm-2 mobile-view">
                      <button
                        className="btn btn-primary border-0"
                        style={{ backgroundColor: "black", width: "100%" }}
                      >
                        Login
                      </button>
                    </div>
                  </div>

                  <br />
                  <br />
                </div>
              </div>
              <div className="col-sm-3"></div>

              {/* <div className="col-sm-4"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
