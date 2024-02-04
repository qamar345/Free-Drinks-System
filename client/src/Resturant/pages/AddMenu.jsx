import React from "react";
import "../assets/style/resturantStyle.css";

export const AddMenu = () => {
  return (
    <>
      <section className="restu-bg">
        <div className="container">
          <div className="container-fluid  menu-form">
            <div className="row">
              <h3 className="text-center" style={{ color: "white" }}>
                Add Menu
              </h3>
              <br />
              <br />
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="shadow rounded p-">
                  <input
                    type="file"
                    className="form-control rounded-0"
                    multiple
                    accept="image/*"
                  />

                  <br />
                  <br />
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Menu Name"
                  />

                  <br />
                  <br />

                  <div className="text-center">
                    <button className="btn btn-primary rounded-0 border-0 menu-submit">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
