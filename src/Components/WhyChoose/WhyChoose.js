import React from "react";
import "./WhyChoose.css";
import iconbox from "../../Images/Iconbox.png";
import iconglobal from "../../Images/Iconglobal.png";
import icontime from "../../Images/Icontime.png";
import iconship2 from "../../Images/Iconship2.png";
import iconcall from "../../Images/Iconcall.png";
import icondrum from "../../Images/Icondrum.png";
import dreamlifter from "../../Images/dreamlifter.png";
import iconzoom from "../../Images/Iconzoom.png";

const WhyChoose = () => {
  return (
    <div className="container-fluid why-choose">
      <div className="why-blue">
        <div className="dream-lifter">
          <img src={dreamlifter} alt="dreamlifter" />
        </div>
        <div className="products">
          <img src={iconzoom} alt="iconzoom" />
          <p>Moving your products across borders</p>
        </div>
      </div>
      <div className="why-grey">
        <div className="why-pad">
          <p className="try">Why Choose</p>
          <h2>We create opportunity to reach potential</h2>
          <p className="why-des">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="why-flex">
            <div>
              <div className="why-flex2">
                <img src={iconbox} alt="i-box" />
                <p>Safe Package</p>
              </div>
              <div className="why-flex2">
                <img src={iconglobal} alt="iconglobal" />
                <p>Global Tracking</p>
              </div>
              <div className="why-flex2">
                <img src={icontime} alt="icontime" />
                <p>In Time Delivery</p>
              </div>
            </div>
            <div>
              <div className="why-flex2">
                <img src={iconship2} alt="ship2" />
                <p>Ship Everyware</p>
              </div>
              <div className="why-flex2">
                <img src={iconcall} alt="iconcall" />
                <p>24/7 Support</p>
              </div>
              <div className="why-flex2">
                <img src={icondrum} alt="icondrum" />
                <p>Transparant Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
