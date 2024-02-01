import React, { useEffect } from "react";
import "../assets/style/style.css";
import Aos from "aos";

export const UserRegister = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="background-bg">
      <div className="container">
        <div className="container-fluid">
          <div className="row register">
            <br />
            <h3
              data-aos="fade-down"
              data-aos-duration="1500"
              className="text-center"
              style={{ color: "white" }}
            >
              Register
            </h3>
            <br />
            <br />
            <div
              data-aos="flip-left"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>

            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3"
            >
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3"
            >
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3 text-center"
            >
              <button className="btn btn-primary border-0 register-btn">
                Register
              </button>
            </div>
            <span  data-aos="fade-right"
              data-aos-duration="2500" style={{color: "white"}}>
              Have an account? <a href="">
              Login
              </a>
            </span>
          </div>

          {/* <div className="row">
            <div className="col"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
