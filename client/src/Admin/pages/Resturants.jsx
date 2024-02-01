import React from "react";
import "../assets/style/adminStyle.css";

export const Resturants = () => {
  return (
    <>
      <section className="admin-bg">
        <div className="container">
          <div className="container-fluid resturant-table">
            <table className="table text-center overflow-x-scroll">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XYZ Reesturant</td>
                  <td>0300-1234567</td>
                  <td>ABC Street XYZ Road</td>
                  <td>
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
                <tr>
                  <td>XYZ Reesturant</td>
                  <td>0300-1234567</td>
                  <td>ABC Street XYZ Road</td>
                  <td>
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
                <tr>
                  <td>XYZ Reesturant</td>
                  <td>0300-1234567</td>
                  <td>ABC Street XYZ Road</td>
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
