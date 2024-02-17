import React from "react";
import Discover from "../Components/landingpageS/Discover";
import Features from "../Components/landingpageS/Features";
import Footer from "../Components/landingpageS/Footer";
import Header from "../Components/landingpageS/Header";
import HowWork from "../Components/landingpageS/HowWork";
import Navbar from "../Components/landingpageS/Navbar";
import Plans from "../Components/landingpageS/Plans";
import Products from "../Components/landingpageS/Products";
import Support from "../Components/landingpageS/Support";
import FAQ from "../Components/landingpageS/FAQ";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Discover />
      <Features  />
      <Products />
      <Plans />
      <HowWork />
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
};

export default LandingPage;
