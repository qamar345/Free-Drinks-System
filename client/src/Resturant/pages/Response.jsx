import React, { useEffect, useState } from "react";
import "../assets/style/resturantStyle.css";
import axios from "axios";

export const Response = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getResponse();
  });

  const getResponse = () => {
    axios
      .get("http://localhost:8000/get-response")
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
            <table className="table text-center overflow-x-scroll">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Drinks</th>
                  <th scope="col">Action</th>
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
                        {drinks.map((dri) => (
                          <>
                            <td>
                              {dri}
                            </td>
                          </>
                        ))}

                        <td>
                          <button className="btn btn-danger"> Delete </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
                {/* <tr>
                  <td>XYZ Reesturant</td>
                  <td>xyz@gmail.com</td>
                  <td>
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
