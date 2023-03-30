import React from "react";
import "./Header.css";
import logo from "../../Images/Logo.png";
import time from "../../Images/Icon.png";
import message from "../../Images/Icon2.png";
import call from "../../Images/Icon3.png";

const Header = () => {
  return (
    <div className="container-fluid section-header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="header-icons">
        <div className="header-group">
          <img src={time} alt="time" />
          <div className="header-text">
            <p>Mon - Sat 9.00 - 18.00 </p>
            <p className="minus-margin">Sunday Closed</p>
          </div>
        </div>
        <div className="header-group">
          <img src={message} alt="message" />
          <div className="header-text">
            <p>Email </p>
            <p className="minus-margin">contact@logistics.com</p>
          </div>
        </div>
        <div className="header-group">
          <img src={call} alt="message" />
          <div className="header-text">
            <p>Call Us </p>
            <p className="minus-margin">(00) 112 365 489</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
