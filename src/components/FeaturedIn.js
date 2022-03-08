import React from "react";

import techCrunch from "../assets/company-logos/techcrunch.png";
import businessInsider from "../assets/company-logos/business-insider.png";
import newYorkTimes from "../assets/company-logos/the-new-york-times.png";
import forbes from "../assets/company-logos/forbes.png";
import usaToday from "../assets/company-logos/usa-today.png";
import "./FeaturedIn.css";

const FeaturedIn = () => {
  return (
    <section class="section-featured">
      <div class="container">
        <h2 class="heading-featured-in">As featured in</h2>
        <div class="logos">
          <img src={techCrunch} alt="Techcrunch logo" />
          <img src={businessInsider} alt="Business Insider logo" />
          <img src={newYorkTimes} alt="The New York Times logo" />
          <img src={forbes} alt="Forbes logo" />
          <img src={usaToday} alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
