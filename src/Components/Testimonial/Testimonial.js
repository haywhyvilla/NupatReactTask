import React from "react";
import "./Testimonial.css";
import firstman from "../../Images/firstman.png";
import lastman from "../../Images/lastman.png";
import symbol from "../../Images/symbol.png";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillStar,
} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="container-fluid section-testimonial">
      <div className="testimonial">
        <div className="testimonial-head">
          <div className="safe">
            <p>Testimonial</p>
            <h3>What Our Customer Say</h3>
          </div>
          <div className="direction-testimonial">
            <div className="color-y">
              <AiOutlineArrowRight />
            </div>
            <div className="color-b">
              <AiOutlineArrowLeft />
            </div>
          </div>
        </div>
        <div className="div-color-container">
          <div className="div-ash">
            <div className="display-flexy">
              <div className="div-img">
                <img src={firstman} alt="fm" />
              </div>
              <div className="div-name">
                <h5>Kathleen Smith</h5>
                <p>Fuel Company</p>
              </div>
              <img src={symbol} alt="symbol" className="symbol" />
            </div>
            <p className="firstman-p">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className="svg-react">
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
            </div>
          </div>
          <div className="div-blue">
            <div className="display-flexy">
              <div className="div-img">
                <img src={lastman} alt="fm" />
              </div>
              <div className="div-name2">
                <h5>John Martin</h5>
                <p className="p-w">Restoration Company</p>
              </div>
              <img src={symbol} alt="symbol" className="symbol" />
            </div>
            <p className="lastman-p">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className="svg-react">
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
              <AiFillStar size={34} color="#FDAF3B" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
