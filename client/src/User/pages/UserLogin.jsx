import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import AOS from "aos";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const [data, setData] = useState({
    role: "user",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const LoginSubmit = () => {
    if (data.email === undefined || data.password === undefined) {
      alert("Please empty fields first!!!");
    } else {
      axios
        .post("http://localhost:8000/login", { data })
        .then((res) => {
          if (res.data.e === data.email) {
            sessionStorage.setItem("userEmail", res.data.e);
            sessionStorage.setItem("username", res.data.n);
            sessionStorage.setItem("isLoggedIn", true);
            sessionStorage.setItem("token", res.data.tokenID);
            alert("Login Successfully");
            navigate("/user-home");
          } else {
            alert("Wrong Credantials!!!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-sm-5 mobile-view">
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-sm-2 mobile-view">
                      <button
                        className="btn btn-primary border-0"
                        style={{ backgroundColor: "black", width: "100%" }}
                        onClick={LoginSubmit}
                      >
                        Login
                      </button>
                    </div>

                    <span
                      data-aos="fade-right"
                      data-aos-duration="2500"
                      style={{ color: "white", textAlign: "center" }}
                    >
                      Have an account? <a href="">Register</a>
                    </span>
                  </div>

                  <br />
                  <br />
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
