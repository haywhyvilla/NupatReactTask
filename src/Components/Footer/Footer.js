import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo.png";
import message from "../../Images/Icon2.png";
import call from "../../Images/Icon3.png";

import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container-fluid section-footer">
      <div className="imagefooter"></div>
      <div className="footer-blue">
        <div className="footer-flex">
          <div className="footer-space"></div>
          <img src={logo} alt="logo" />
          <div className="footer-navs">
            <h5>Pages</h5>
            <h5>Utility</h5>
            <h5>Subscribe</h5>
          </div>
        </div>
        <div className="footer-end-flex">
          <div>
            <p className="leverage">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <div className="contact-group">
              <img src={message} alt="message" />
              <div className="contact-text">
                <p>Email</p>
                <p className="minus-margin">contact@logistics.com</p>
              </div>
            </div>
            <div className="contact-group">
              <img src={call} alt="call" />
              <div className="contact-text">
                <p>Call Us</p>
                <p className="minus-margin">(00) 112 365 489</p>
              </div>
            </div>
          </div>
          <div className="list-foot">
            <p>About Us </p>
            <p>Our Team</p>
            <p>Our Project</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <div className="list-foot">
            <p>Style Guide </p>
            <p>Changelog</p>
            <p>Licenses </p>
            <p>Protected</p>
            <p>Not Found</p>
          </div>
          <div className="tonight">
            <div className="contact-form">
              <input
                type="text"
                className="form-control"
                placeholder="Email here*"
              />
            </div>
            <div className="footer-flexs">
              <button>Send Now</button>
              <div>
                <BsLinkedin size={20} color="#ffffff" />
                <BsTwitter size={20} color="#ffffff" />
                <BsFacebook size={20} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="foot-flexer">
          <p className="lastline">
            Copyright © TransitFlow | Designed by VictorFlow - Powered by
            Webflow.
          </p>
          <div className="last-flex">
            <p>StyleGuide </p>
            <p>Licenses</p>
            <p>Changelog</p>
            <p>Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
