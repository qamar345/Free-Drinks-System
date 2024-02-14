import React, { useEffect, useState } from "react";
import "../assets/style/adminStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { headers } from "../config/AdminToken";


export const Resturants = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const check = sessionStorage.getItem("adminIsLoggedIn");

  if (!check) {
    navigate("/");
  }

  const getRestaurants = () => {
    axios
      .get("http://localhost:8000/get-restaurants", {headers})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurants();
  });
  return (
    <>
      <section className="admin-bg">
        <div className="container">
          <div className="container-fluid resturant-table">
            <h3 className="text-center" style={{ color: "white" }}>
              Restaurants
            </h3>
            <br />

            <div className="overflow-auto text-center">
              <table className="table table-bordered overflow-scroll">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((res) => {
                    const { name, email, address } = res;

                    return (
                      <>
                        <tr>
                          <td>{name}</td>
                          <td>{email}</td>
                          <td>{address}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
