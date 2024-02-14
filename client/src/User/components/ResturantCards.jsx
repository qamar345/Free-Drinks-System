import React from "react";
import QRCode from "react-qr-code";
import drink1 from "../assets/images/drinks-1.webp";
export const ResturantCards = ({ resturants }) => {
  const Link = "http://192.168.0.106:3000/menu-card";

  return (
    <>
      {resturants.map((res) => {
        const { name } = res;

        return (
          <>
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
                  {res.Menu.map((rss) => {
                    const { email } = rss;
                    return (
                      <div style={{ marginTop: "-50px" }}>
                        <QRCode
                          value={JSON.stringify({ email, Link })}
                          size={75}
                          style={{ border: "5px solid  #ed6a5a " }}
                        />
                      </div>
                    );
                  })}

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
                  <h5 className="card-title">{name}</h5>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
