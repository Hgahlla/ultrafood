import React from "react";

import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header class="header">
      <a href="#">
        <img class="logo" alt="Ultrafood logo" src={logo} />
      </a>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
