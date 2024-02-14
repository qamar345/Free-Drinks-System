import React, { useEffect, useState } from "react";
import "../assets/style/adminStyle.css";
import Aos from "aos";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const [data, setData] = useState({
    role: "admin",
    trial: "permanent",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    if (data.email === undefined || data.password === undefined) {
      alert("Please fill empty fields first");
    } else {
      axios.post("http://localhost:8000/login", { data }).then((res) => {
        if (res.data.e === data.email) {
          sessionStorage.setItem("adminEmail", res.data.e);
          sessionStorage.setItem("adminName", res.data.n);
          sessionStorage.setItem("adminToken", res.data.tokenID);
          alert("Login Successfully");
          navigate("/admin-dashboard");
        } else {
          alert("Wrong cradantials!!!");
        }
      });
    }
  };
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
                  <h3
                    data-aos="fade-down"
                    data-aos-duration="3000"
                    className="text-center"
                    style={{ color: "white" }}
                  >
                    Admin Login
                  </h3>
                  <br />
                  <br />
                  <input
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />
                  <br />
                  <input
                    data-aos="fade-down"
                    data-aos-duration="3000"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />

                  <br />

                  <div
                    className="mobile-view"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <button
                      className="btn btn-primary rounded-0 border-0 admin-login-btn"
                      onClick={loginHandler}
                    >
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
