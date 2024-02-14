import React, { useEffect, useState } from "react";
import "../assets/style/adminStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { headers } from "../config/AdminToken";

export const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const check = sessionStorage.getItem("adminIsLoggedIn");

  if (!check) {
    navigate("/");
  }

  const getUsers = () => {
    axios
      .get("http://localhost:8000/get-users", { headers })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  });
  return (
    <>
      <section className="admin-bg">
        <div className="container">
          <div className="container-fluid users-table">
            <h3 className="text-center" style={{ color: "white" }}>
              Users
            </h3>
            <br />
            <br />
            <div className="overflow-auto mt-4 text-center">
              <table className="table table-bordered overflow-scroll">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((res) => {
                    const { name, email } = res;

                    return (
                      <>
                        <tr>
                          <td>{name}</td>
                          <td>{email}</td>
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
