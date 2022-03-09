import React from "react";

import Hero from "../components/Hero";
import FeaturedIn from "../components/FeaturedIn";
import HowItWorks from "../components/HowItWorks";
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default HomePage;
