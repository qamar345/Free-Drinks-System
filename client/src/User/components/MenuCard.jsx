import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MenuCard = () => {
  const navigate = useNavigate();
  const [checkEmail, setCheckEmail] = useState("");
  const check = sessionStorage.getItem("isLoggedIn");

    // if (!check) {
    //   navigate("/");
    // }

  const handleInput = (e) => {
    setCheckEmail({ ...checkEmail, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(checkEmail);

    if (checkEmail.email === undefined) {
      alert("Please fill empty field first!!!");
    } else {
      localStorage.setItem("MenuEmail", checkEmail.email);
      alert("Your MenuId Submitted");
      navigate("/menu");
    }
  };
  return (
    <>
      <section>
        <div className="container ">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-4">
                <div className="shadow rounded p-3 text-center">
                  {/* <form onSubmit={handleSubmit}> */}
                  <input
                    name="email"
                    placeholder="Enter Restaurant Email"
                    type="text"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />
                  <br />
                  <button
                    className="btn btn-warning rounded-0 shadow"
                    onClick={handleSubmit}
                  >
                    Verify
                  </button>
                  {/* </form> */}
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
