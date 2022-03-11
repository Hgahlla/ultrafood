import React, { useState } from "react";

import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className={`header ${isSidebarOpen ? "nav-open" : ""}`}>
      <a href="#">
        <img className="logo" alt="Ultrafood logo" src={logo} />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon
          class="icon-mobile-nav"
          name="menu-outline"
          onClick={() => setIsSidebarOpen(true)}
        ></ion-icon>
        <ion-icon
          class="icon-mobile-nav"
          name="close-outline"
          onClick={() => setIsSidebarOpen(false)}
        ></ion-icon>
      </button>
    </header>
  );
};

export default Header;
