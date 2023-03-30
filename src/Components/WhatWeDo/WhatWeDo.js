import React from "react";
import "./WhatWeDo.css";
import ship from "../../Images/Iconplane.png";
import bus from "../../Images/Iconbus.png";
import plane from "../../Images/Iconplane.png";
import house from "../../Images/Iconhouse.png";

const WhatWeDo = () => {
  return (
    <div className="container-fluid section-what-we-do">
      <div className="what-we-do">
        <div className="safe">
          <span></span>
          <p>What We Do</p>
          <h2>Safe & Reliable Cargo Solutions</h2>
        </div>
        <div>
          <div className="what-we-do-grid">
            <img src={ship} alt="ship" />
            <div className="do-word">
              <h3>Sea Transport Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="what-we-do-grid">
            <img src={plane} alt="plane" />
            <div className="do-word">
              <h3>Air Fright Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="what-we-do-grid">
            <img src={house} alt="house" />
            <div className="do-word">
              <h3>Warehousing Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="what-we-do-grid">
            <img src={bus} alt="bus" />
            <div className="do-word">
              <h3>Local Shipping Services</h3>
              <p>
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
