import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
