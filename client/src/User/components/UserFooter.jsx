import React from "react";
import "../assets/style/style.css";

export const UserFooter = () => {
  return (
    <section className="my-5">
      <footer className="text-center text-white">
        <div className="container pt-4">
          <section className="mb-4">
            <h2 className="text-center" style={{ color: "black" }} href="#">
              DRINKPASS
            </h2>
          </section>
        </div>
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="/">
            DRINKPASS
          </a>
        </div>
      </footer>
    </section>
  );
};
