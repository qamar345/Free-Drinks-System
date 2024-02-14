import React, { useEffect, useState } from "react";
import "../assets/style/resturantStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { headers } from "../config/RestuToken";

export const Response = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const check = sessionStorage.getItem("RisLoggedIn");

  if (!check) {
    navigate("/");
  }

  useEffect(() => {
    getResponse();
  });

  const getResponse = () => {
    axios
      .get("http://localhost:8000/get-response", { headers })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid users-response">
            <h3 className="text-center" style={{ color: "white" }}>
              Response
            </h3>
            <br />
            <br />

            <div className="overflow-auto mt-3 text-center">
              <table className="table table-bordered overflow-scroll">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Drinks</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((res) => {
                    const { username, email, drinks } = res;

                    return (
                      <>
                        <tr>
                          <td>{username}</td>
                          <td>{email}</td>
                          <div className="row">
                            {drinks.map((dri) => {
                              return (
                                <>
                                  <div className="col-sm-2 my-2">
                                    <td
                                      className="rounded py-2 px-2"
                                      style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {dri}
                                    </td>
                                  </div>
                                </>
                              );
                            })}
                          </div>
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
