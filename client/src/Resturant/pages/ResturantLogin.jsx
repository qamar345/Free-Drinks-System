import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ResturantLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    role: "restaurant",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const LoginHandler = () => {
    if (data.email === undefined || data.password === undefined) {
      alert("Please fill empty fields first");
    } else {
      axios.post("http://localhost:8000/login", { data }).then((res) => {
        if (res.data.e === data.email) {
          sessionStorage.setItem("Remail", res.data.e);
          sessionStorage.setItem("Rname", res.data.n);
          sessionStorage.setItem("Rtoken", res.data.tokenID);
          sessionStorage.setItem("RisLoggedIn", true);
          alert("Login as Restaurant Successfuly");
          navigate("/restaurant-dashboard");
        } else {
          alert("Wrong Credantials!!!");
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
                  <h3 className="text-center" style={{ color: "white" }}>
                    Resturant Login
                  </h3>
                  <br />
                  <br />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />
                  <br />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />

                  <br />

                  <div className="mobile-view">
                    <button
                      className="btn btn-primary rounded-0 border-0 admin-login-btn"
                      onClick={LoginHandler}
                    >
                      Login
                    </button>
                    <br />
                    <br />
                    <span>
                      <Link to={"/register-restaurants"}>
                        Register Restaurant
                      </Link>
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
