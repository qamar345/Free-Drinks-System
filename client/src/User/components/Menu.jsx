import React, { useEffect, useState } from "react";
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
        .post("http://192.168.0.106:8000/get-selected", { email })
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

  const [response, setResponse] = useState({
    email: sessionStorage.getItem("userEmail"),
    username: sessionStorage.getItem("username"),
  });

  // let responseData = {
  //   email: sessionStorage.getItem("userEmail"),
  //   username: sessionStorage.getItem("username"),
  // };

  const handleResponse = (t) => {
    setResponse({ ...response, drinks: t });

    if (
      response.email === undefined ||
      response.username === undefined ||
      response.drinks === undefined
    ) {
      alert("Please login first before choose a drink!!!");
    } else {
      axios
        .post("http://192.168.0.106:8000/submit-response", { response })
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
                    <div className="col-sm-4 mt-3">
                      <div className="card card-style shadow rounded">
                        <img src={imgURL} alt="" />
                        <div className="card-body">
                          <h5>{title}</h5>
                          <br />
                          <button
                            className="btn btn-primary border-0 rounded-0 choose"
                            onClick={() => handleResponse(title)}
                          >
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
