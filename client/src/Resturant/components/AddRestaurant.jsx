import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

export const AddRestaurant = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();
  const [long, setLong] = useState();
  const [lati, setLati] = useState();
  const [data, setData] = useState({});

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLong(position.coords.longitude);
      setLati(position.coords.latitude);
    });
  });

  const AddCafe = (e) => {
    setData({ ...data, longitude: long, latitude: lati });
    // let flag = false;

    if (
      data.name === undefined ||
      data.email === undefined ||
      long === undefined ||
      lati === undefined ||
      data.address === undefined
    ) {
      alert("Please fill empty fields firts!!!");
    } else {
      axios
        .post("http://localhost:8000/add-resturant", { data })
        .then((res) => {
          if (res.data.flag === true) {
            alert(res.data.msg1);
          }
          if (res.data.flag === false) {
            alert(res.data.msg2);
            navigate("/restaurant-dashboard");
          }
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
                  <h3
                    data-aos="fade-down"
                    data-aos-duration="3000"
                    className="text-center"
                    style={{ color: "white" }}
                  >
                    Register Resturant
                  </h3>
                  <br />
                  <br />

                  <input
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    name="name"
                    type="text"
                    placeholder="Resturant Name"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />
                  <br />
                  <input
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                    onChange={handleInput}
                  />
                  <br />

                  <textarea
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="form-control"
                    name="address"
                    id=""
                    cols="10"
                    rows="3"
                    placeholder="Address"
                    onChange={handleInput}
                  ></textarea>
                  <br />
                  <div
                    className="restu-mobile-view"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <button
                      className="btn btn-primary rounded-0 border-0 restu-register-btn"
                      onClick={AddCafe}
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
