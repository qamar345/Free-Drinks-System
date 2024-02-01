import React from "react";
import "../assets/style/style.css";
import QRCode from "react-qr-code";
import drink1 from "../assets/images/drinks-1.webp";

export const UserDashboard = () => {
  return (
    <>
      <section style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="container-fluid text-center">
            <h1 className="hero-text">
              Get Your Free Drinks With Free Subscription
            </h1>
            <br />
            <span>
              Join our membership and enjoy complimentary drinks at local
              restaurants
            </span>
            <br />
            <br />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 signup-sec">
              <button className="btn btn-primary border-0 rounded-0 signup-btn">
                Sign Up Now
              </button>
            </div>
            <br />
            <br />
            <div className="col-sm-6 more-learn">
              <a href="/" className="learn-more">
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <section>
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <h3 className="text-center">Nearby Local Resturants</h3>
              <div className="col-sm-4 mt-5">
                <div className="card border-0 shadow rounded">
                  <img src={drink1} class="card-img-top" alt="..." />
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ marginTop: "-50px" }}>
                      <QRCode
                        value="http://192.168.1.120:3000"
                        size={75}
                        style={{ border: "5px solid  #ed6a5a " }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "small",
                        fontWeight: "600",
                        color: "#ed6a5a",
                      }}
                    >
                      SCAN QR CODE & ENJOY FREE DRINKS
                    </span>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      XYZ Resturant Offer Free Drinks
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mt-5">
                <div className="card border-0 shadow rounded">
                  <img src={drink1} class="card-img-top" alt="..." />
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ marginTop: "-50px" }}>
                      <QRCode
                        value="https://www.youtube.com"
                        size={75}
                        style={{ border: "5px solid  #ed6a5a " }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "small",
                        fontWeight: "600",
                        color: "#ed6a5a",
                      }}
                    >
                      SCAN QR CODE & ENJOY FREE DRINKS
                    </span>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      XYZ Resturant Offer Free Drinks
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mt-5">
                <div className="card border-0 shadow rounded">
                  <img src={drink1} class="card-img-top" alt="..." />
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ marginTop: "-50px" }}>
                      <QRCode
                        value="http://192.168.1.120:3000"
                        size={75}
                        style={{ border: "5px solid  #ed6a5a " }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "small",
                        fontWeight: "600",
                        color: "#ed6a5a",
                      }}
                    >
                      SCAN QR CODE & ENJOY FREE DRINKS
                    </span>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      XYZ Resturant Offer Free Drinks
                    </h5>
                  </div>
                </div>
              </div>

              {/* <div className="col-sm-4">
                <div className="card border-0 shadow rounded">
                  <img src="..." class="card-img-top" alt="..." />
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">B</div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="card border-0 shadow rounded">
                  <img src="..." class="card-img-top" alt="..." />
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">C</div>
                </div>
              </div> */}
            </div>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
};
