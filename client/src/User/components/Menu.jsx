import React, { useEffect, useState } from "react";
// import drink1 from "../assets/images/drinks-1.webp";
// import pumpkin from "../assets/images/pumpkin.webp";
// import mango from "../assets/images/mango.webp";
// import strawberry from "../assets/images/strawberry.webp";
import "../assets/style/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Menu = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("MenuEmail");
  const [data, setData] = useState([]);
  const check = sessionStorage.getItem("isLoggedIn");

  // if (!check) {
  //   navigate("/");
  // }

  const getMenu = () => {
    if (email !== undefined) {
      axios
        .post("http://localhost:8000/get-selected", { email })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Scan menu QRCode first and get your favourite drinks!!!");
    }
  };

  useEffect(() => {
    getMenu();
  });

  return (
    <>
      <section className="menu-bg">
        <div className="container">
          <div className="container-fluid">
            <h1 className="menu-top-m">Drinks</h1>
            <br />
            <div className="question">
              <span
                className="rounded"
                style={{ backgroundColor: "#ed6a5a", padding: "3px" }}
              >
                WHAT HAVE YOU BEEN DRINKING?
              </span>
            </div>
            <br />
            <br />
            <div className="row">
              {data.map((res) => {
                const { imgURL, title } = res;

                return (
                  <>
                    <div className="col-sm-4">
                      <div className="card card-style shadow rounded">
                        <img src={imgURL} alt="" />
                        <div className="card-body">
                          <h5>{title}</h5>
                          <br />
                          <button className="btn btn-primary border-0 rounded-0 choose">
                            CHOOSE
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <br />
          </div>
        </div>
      </section>
    </>
  );
};
