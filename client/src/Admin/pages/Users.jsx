import React from "react";
import "../assets/style/adminStyle.css";

export const Users = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="container-fluid users-table">
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
