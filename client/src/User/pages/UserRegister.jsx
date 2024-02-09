import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import Aos from "aos";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserRegister = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const [data, setData] = useState({ role: "user", trial: "free" });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const UserRegister = () => {
    if (
      data.name === undefined ||
      data.email === undefined ||
      data.password === undefined
    ) {
      alert("Please empty fields first!!!");
    } else {
      axios
        .post("http://localhost:8000/signup", { data })
        .then((res) => {
          alert(res.data);
          navigate("/user-login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Name"
                onChange={handleInput}
              />
            </div>

            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3"
            >
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={handleInput}
              />
            </div>

            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3"
            >
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleInput}
              />
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1500"
              className="col-sm-3 shadow rounded p-3 text-center"
            >
              <button
                className="btn btn-primary border-0 register-btn"
                onClick={UserRegister}
              >
                Register
              </button>
            </div>
            <span
              data-aos="fade-right"
              data-aos-duration="2500"
              style={{ color: "white" }}
            >
              Have an account? <a href="">Login</a>
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
