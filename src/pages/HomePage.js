import React from "react";

import Hero from "../components/Hero";
import FeaturedIn from "../components/FeaturedIn";
import HowItWorks from "../components/HowItWorks";
import Meals from "../components/Meals";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
    </main>
  );
};

export default HomePage;
