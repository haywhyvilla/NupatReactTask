import React from "react";
import "./WhyUs.css";
import aeroplane from "../../Images/aeroplace.jpg";
import girl from "../../Images/girl.png";
import iconbox from "../../Images/Iconbox.png";
import iconmoney from "../../Images/Iconmoney.png";
import pattern from "../../Images/Pattern.png";

const WhyUs = () => {
  return (
    <div className="container-fluid section-why">
      <div className="background-why"></div>
      <div className="back-ground">
        <div className="padding-lr">
          <div className="why-us">
            <p className="whyus">Why Us</p>
            <h2>We provide full range global logistics solution</h2>
            <p className="paragraph">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="paragraph minus-mar">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="minus-marg">
              <div className="flex-me">
                <img src={iconbox} alt="iconbox" />
                <h4>Delivery on Time</h4>
              </div>
              <div className="flex-me">
                <img src={iconmoney} alt="iconmoney" />
                <h4>Optimized Travel Cost</h4>
              </div>
            </div>
          </div>
          <div className="relative-div">
            <img src={aeroplane} alt="aeroplane" className="aeroplane" />
            <img src={girl} alt="girl" className="girl" />
          </div>
        </div>
      </div>
      <div className="numbers">
        <div className="border-left">
          <h2>1294</h2>
          <img src={pattern} alt="pattern" />
          <p>Delivered Packages</p>
        </div>
        <div className="border-right">
          <h2>3594</h2>
          <img src={pattern} alt="pattern" />
          <p>Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
