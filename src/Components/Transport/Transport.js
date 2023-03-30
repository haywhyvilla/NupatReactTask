import React from "react";
import "./Transport.css";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
import four from "../../Images/4.png";
import five from "../../Images/5.png";

const Transport = () => {
  return (
    <div className="container-fluid section-transport">
      <div className="container-transport">
        <h2>Transporting Across The World</h2>
        <div className="pictures-absolute">
          <img src={one} alt="one" />
          <img src={two} alt="two" />
          <img src={three} alt="" />
          <img src={four} alt="one" />
          <img src={five} alt="one" />
        </div>
        <div className="background-white"></div>
        <div className="background-yello">
          <button className="buttom-more">More Work</button>
        </div>
      </div>
    </div>
  );
};

export default Transport;
