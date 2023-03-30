import React from "react";
import "./PageBlog.css";
import blogimage1 from "../../Images/blogImage.png";
import blogimage2 from "../../Images/blogImage2.png";
import blogimage3 from "../../Images/blogImage3.png";
import iconcalender from "../../Images/Iconcalender.png";

const PageBlog = () => {
  return (
    <div className="container-fluid section-blog">
      <div className="heading-div">
        <p>Our Blog</p>
        <h2>Our Latest News</h2>
      </div>
      <div className="line"></div>
      <div className="blog-flex">
        <div className="blog-flexy">
          <img src={blogimage1} alt="blogimage1" />
          <div>
            <img src={iconcalender} alt="iconcalender" />
            <h2>08</h2>
            <p>September</p>
          </div>
        </div>
        <div className="blog-flex-start">
          <h4>Inland freight a worthy solution for your business</h4>
          <p>
            We are dedicated in creating added value for our customers by
            implementing modern technology in our work.
          </p>
          <ul>
            <li>Urgent transport solutions</li>
            <li> Reliable & experienced staffs</li>
            <li> Urgent transport solutions</li>
            <li> Reliable & experienced staffs</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="blog-flex">
        <div className="blog-flexy">
          <img src={blogimage2} alt="blogimage2" />
          <div>
            <img src={iconcalender} alt="iconcalender" />
            <h2>12</h2>
            <p>September</p>
          </div>
        </div>
        <div className="blog-flex-start">
          <h3>How technology can help redraw the supply chain map</h3>
          <p>
            We are dedicated in creating added value for our customers by
            implementing modern technology in our work.
          </p>
          <ul>
            <li>Urgent transport solutions</li>
            <li> Reliable & experienced staffs</li>
            <li> Urgent transport solutions</li>
            <li> Reliable & experienced staffs</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="blog-flex">
        <div className="blog-flexy">
          <img src={blogimage3} alt="blogimage3" />
          <div>
            <img src={iconcalender} alt="iconcalender" />
            <h2>25</h2>
            <p>September</p>
          </div>
        </div>
        <div className="blog-flex-start">
          <h4>Five things you should have ready for your broker</h4>
          <p>
            We are dedicated in creating added value for our customers by
            implementing modern technology in our work.
          </p>
          <ul>
            <li>Urgent transport solutions</li>
            <li> Reliable & experienced staffs</li>
            <li> Urgent transport solutions</li>
            <li> Reliable & experienced staffs</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <button>More Blog</button>
    </div>
  );
};

export default PageBlog;
