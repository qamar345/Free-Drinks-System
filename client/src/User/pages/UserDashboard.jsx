import React, { useEffect, useState } from "react";
import "../assets/style/style.css";

import { UserNav } from "../components/UserNav";
import { useNavigate } from "react-router-dom";
import { ResturantCards } from "../components/ResturantCards";
import axios from "axios";

export const UserDashboard = () => {
  const navigate = useNavigate();
  const check = sessionStorage.getItem("isLoggedIn");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({});

  if (!check) {
    navigate("/");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        long: position.coords.longitude,
        lati: position.coords.latitude,
      });
    });

    console.log(location);

    // axios.post("http://localhost:8000/get-menu")
  });

  return (
    <>
      <UserNav username={sessionStorage.getItem("username")} />
      <br />
      <section style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="container-fluid text-center">
            <h1 className="hero-text">
              Get Your Free Drinks With Free Subscription
            </h1>
            <br />
            <span>
              Join our membership and enjoy complimentary drinks at local
              restaurants
            </span>
            <br />
            <br />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 signup-sec">
              <button className="btn btn-primary border-0 rounded-0 signup-btn">
                Sign Up Now
              </button>
            </div>
            <br />
            <br />
            <div className="col-sm-6 more-learn">
              <a href="/" className="learn-more">
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <section>
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <h3 className="text-center">Nearby Local Resturants</h3>
              <div className="col-sm-4 mt-5">
                <ResturantCards />
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
};
