import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import WhyUs from "./Components/WhyUs/WhyUs";
import Transport from "./Components/Transport/Transport";
import Testimonial from "./Components/Testimonial/Testimonial";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Transporters from "./Components/Transporters/Transporters";
import Contact from "./Components/Contacts/Contact";
import PageBlog from "./Components/PageBlog/PageBlog";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <WhatWeDo />
      <WhyUs />
      <Transport />
      <Testimonial />
      <WhyChoose />
      <Transporters />
      <Contact />
      <PageBlog />
      <Footer />
    </div>
  );
};

export default App;
