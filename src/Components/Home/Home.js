import React from "react";
import "./Home.css";

import { FaInstagram } from "react-icons/fa";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsChevronDown,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="container-fluid section-home">
      <div className="navs-lists">
        <div className="nav-lists">
          <h5>Home</h5>
          <h5>About</h5>
          <h5>
            Pages <BsChevronDown />
          </h5>
          <h5>Project</h5>
          <h5>Contact</h5>
        </div>
        <div className="icons-lists">
          <div className="icon-list">
            <FaInstagram size={22} />
            <BsFacebook size={22} />
            <BsTwitter size={22} />
            <BsLinkedin size={22} />
          </div>
          <div className="request">
            <p>Request Quote</p>
          </div>
        </div>
      </div>
      <div className="hero-part">
        <p className="logistics">Logistics & Supply Chain Solutions</p>
        <h1>Your Gateway to any Destination in the World</h1>
        <p className="hero-part-p">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
        </p>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default Home;
