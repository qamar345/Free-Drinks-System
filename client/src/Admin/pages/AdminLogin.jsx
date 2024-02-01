import React from "react";
import "../assets/style/adminStyle.css";

export const AdminLogin = () => {
  return (
    <>
      <section className="admin-bg">
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="shadow rounded p3 admin-login-form">
                  <br />
                  <h3 className="text-center" style={{ color: "white" }}>
                    Admin Login
                  </h3>
                  <br />
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-0"
                  />

                  <br />

                  <div className="mobile-view">
                    <button className="btn btn-primary rounded-0 border-0 admin-login-btn">
                      Login
                    </button>
                    <br />
                    <br />
                    <span>
                      <a href="">Forgot Password</a>
                    </span>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
