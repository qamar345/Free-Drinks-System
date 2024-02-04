import React from "react";

export const RegisterResturant = () => {
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
                  <h3 className="text-center" style={{ color: "white" }}>
                    Register Resturant
                  </h3>
                  <br />
                  <br />

                  <input
                    type="text"
                    placeholder="Resturant Name"
                    className="form-control rounded-0"
                  />
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0"
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-0"
                  />

                  <br />

                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="5"
                    className="form-control rounded-0"
                    placeholder="Resturant Address"
                  ></textarea>

                  <br />

                  <div className="restu-mobile-view">
                    <button className="btn btn-primary rounded-0 border-0 restu-register-btn">
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
