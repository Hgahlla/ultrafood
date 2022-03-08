import React from "react";

import customer1 from "../assets/customers/customer-1.jpg";
import customer2 from "../assets/customers/customer-2.jpg";
import customer3 from "../assets/customers/customer-3.jpg";
import customer4 from "../assets/customers/customer-4.jpg";
import customer5 from "../assets/customers/customer-5.jpg";
import customer6 from "../assets/customers/customer-6.jpg";
import heroWebp from "../assets/hero/hero.webp";
import heroPng from "../assets/hero/hero-min.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section class="section-hero">
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p class="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" class="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#how" class="btn btn--outline">
            Learn more &darr;
          </a>
          <div class="delivered-meals">
            <div class="delivered-imgs">
              <img src={customer1} alt="Customer photo" />
              <img src={customer2} alt="Customer photo" />
              <img src={customer3} alt="Customer photo" />
              <img src={customer4} alt="Customer photo" />
              <img src={customer5} alt="Customer photo" />
              <img src={customer6} alt="Customer photo" />
            </div>
            <p class="delivered-text">
              <span>100,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div class="hero-img-box">
          <picture>
            <source srcSet={heroWebp} type="image/webp" />
            <source srcSet={heroPng} type="image/png" />

            <img
              src={heroPng}
              class="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
