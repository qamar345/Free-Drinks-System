import React from "react";
import "../assets/style/resturantStyle.css";

export const Response = () => {
  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid users-response">
            <h3 className="text-center" style={{ color: "white" }}>
              Response
            </h3>
            <br /><br />
            <table className="table text-center overflow-x-scroll">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XYZ Reesturant</td>
                  <td>xyz@gmail.com</td>
                  <td>
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
                <tr>
                  <td>XYZ Reesturant</td>
                  <td>xyz@gmail.com</td>
                  <td>
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
                <tr>
                  <td>XYZ Reesturant</td>
                  <td>xyz@gmail.com</td>
                  <td>
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
