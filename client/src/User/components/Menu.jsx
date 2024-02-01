import React from "react";
import drink1 from "../assets/images/drinks-1.webp";
import pumpkin from "../assets/images/pumpkin.webp";
import mango from "../assets/images/mango.webp";
import strawberry from "../assets/images/strawberry.webp";

import "../assets/style/style.css";

export const Menu = () => {
  return (
    <>
      <section className="menu-bg">
        <div className="container">
          <div className="container-fluid">
            <h1 className="menu-top-m">Drinks</h1>
            <br />
            <div className="question">
              <span
                className="rounded"
                style={{ backgroundColor: "#ed6a5a", padding: "3px" }}
              >
                WHAT HAVE YOU BEEN DRINKING?
              </span>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={pumpkin} alt="" />
                  <div className="card-body">
                    <h5>Pumpkin Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={mango} alt="" />
                  <div className="card-body">
                    <h5>Mango Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={strawberry} alt="" />
                  <div className="card-body">
                    <h5>Strawberry Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={pumpkin} alt="" />
                  <div className="card-body">
                    <h5>Pumpkin Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={mango} alt="" />
                  <div className="card-body">
                    <h5>Mango Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={strawberry} alt="" />
                  <div className="card-body">
                    <h5>Strawberry Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={pumpkin} alt="" />
                  <div className="card-body">
                    <h5>Pumpkin Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={mango} alt="" />
                  <div className="card-body">
                    <h5>Mango Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card card-style shadow rounded">
                  <img src={strawberry} alt="" />
                  <div className="card-body">
                    <h5>Strawberry Juice</h5>
                    <br />
                    <button className="btn btn-primary border-0 rounded-0 choose">
                      CHOOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};
