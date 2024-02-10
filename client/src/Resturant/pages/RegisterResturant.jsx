import axios from "axios";
import React, { useState } from "react";

export const RegisterResturant = () => {
  const [data, setData] = useState({
    role: "restaurant",
    trial: "permanent",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SubmitHandler = () => {
    if (
      data.name === undefined ||
      data.email === undefined ||
      data.password === undefined
    ) {
      alert("Please fill empty fields first!!!");
    } else {
      axios
        .post("http://localhost:8000/signup", { data })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="shadow rounded p3 restu-register-form">
                  <br />
                  <h3 className="text-center" style={{ color: "white" }}>
                    Register Resturant
                  </h3>
                  <br />
                  <br />

                  <input
                    name="name"
                    type="text"
                    placeholder="Resturant Name"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />
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

                  <div className="restu-mobile-view">
                    <button
                      className="btn btn-primary rounded-0 border-0 restu-register-btn"
                      onClick={SubmitHandler}
                    >
                      Register
                    </button>
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
