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
      <section style={{ backgroundColor: "#ed6a5a" }}>
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div data-aos="fade-right" data-aos-duration="1500" className="col-sm-4">
                <img src={drink0} alt="" />
              </div>
              <div data-aos="fade-up" data-aos-duration="1500" className="col-sm-4">
                <h1 className="login-text">Welcome to DrinkPass!</h1>

                <p style={{ color: "white" }}>
                  Unlock a World of Flavor with Free Drinks at Local
                  Restaurants!
                </p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1500" className="col-sm-4">
                <div className="shadow rounded p-3 login-form">
                  <br />
                  <br />
                  <h3 className="text-center" style={{ color: "white" }}>
                    Login
                  </h3>
                  <br />
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />

                  <br />
                  <br />
                  <div className="text-center">
                    <button
                      className="btn btn-primary border-0"
                      style={{ backgroundColor: "black" }}
                    >
                      Login
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
              {/* <div className="col-sm-4"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
