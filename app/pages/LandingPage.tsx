import React from "react";
import Hero from "../components/Hero";
import CusomterService from "../components/CustomerService";
import Newsletter from "../components/Newsletter";
import Fleet from "../components/Fleet";
import Parteners from "../components/Parteners";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <CusomterService />
      <Newsletter />
      <Fleet />
      <Parteners/>
      <Testimonials/>
    </div>
  );
};

export default LandingPage;
