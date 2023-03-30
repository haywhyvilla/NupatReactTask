import React from "react";
import "./Contact.css";
import time from "../../Images/Icon.png";
import message from "../../Images/Icon2.png";
import call from "../../Images/Icon3.png";
import picture1 from "../../Images/picture1.png";
import picture2 from "../../Images/picture2.png";
import picture3 from "../../Images/picture3.png";
import picture4 from "../../Images/picture4.png";

const Contact = () => {
  return (
    <div className="container-fluid section-contact">
      <div className="flexdiv">
        <div>
          <p className="try2">Contact</p>
          <h2>Get in touch with us</h2>
          <p className="leverage">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div className="contact-group">
            <img src={message} alt="message" />
            <div className="contact-text">
              <p>Email </p>
              <p className="minus-margin">contact@logistics.com</p>
            </div>
          </div>
          <div className="contact-group">
            <img src={call} alt="call" />
            <div className="contact-text">
              <p>Call Us </p>
              <p className="minus-margin">(00) 112 365 489</p>
            </div>
          </div>
          <div className="contact-group">
            <img src={time} alt="time" />
            <div className="contact-text">
              <p>Mon - Sat 9.00 - 18.00 </p>
              <p className="minus-margin">Sunday Closed</p>
            </div>
          </div>
        </div>
        <form>
          <div className="displayflex">
            <div className="contact-form">
              <input
                type="text"
                className="form-control"
                placeholder="Your name*"
              />
            </div>
            <div className="contact-form">
              <input
                type="text"
                className="form-control"
                placeholder="Email*"
              />
            </div>
          </div>
          <div className="displayflex">
            <div className="contact-form">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number*"
              />
            </div>
            <div className="contact-form">
              <input type="text" className="form-control" placeholder="City*" />
            </div>
          </div>
          <textarea
            type={Text}
            placeholder="Your Message"
            cols="100"
            rows="8"
            required
          ></textarea>
          <button className="submit">Submit Message</button>
        </form>
      </div>
      <div className="fleximg">
        <img src={picture1} alt="pic1" />
        <img src={picture2} alt="pic2" />
        <img src={picture3} alt="pic3" />
        <img src={picture4} alt="pic4" />
      </div>
    </div>
  );
};

export default Contact;
