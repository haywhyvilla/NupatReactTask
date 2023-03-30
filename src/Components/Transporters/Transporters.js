import React from "react";
import "./Transporter.css";
import picone from "../../Images/one.png";
import pictwo from "../../Images/two.png";
import picthree from "../../Images/three.png";

const Transporters = () => {
  return (
    <div className="container-fluid section-transporters">
      <div className="save">
        <p>The Transporters</p>
        <h2>Meet Expert Team</h2>
      </div>
      <div className="images">
        <img src={picone} alt="picone" />
        <img src={pictwo} alt="pictwo" />

        <img src={picthree} alt="picthree" />
      </div>
    </div>
  );
};

export default Transporters;
