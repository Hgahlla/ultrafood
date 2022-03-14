import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";

import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className={`header ${isSidebarOpen ? "nav-open" : ""}`}>
      <img
        className="logo"
        alt="Ultrafood logo"
        src={logo}
        onClick={() => animateScroll.scrollToTop()}
      />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link
              className="main-nav-link"
              to="how"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              to="meals"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              to="pricing"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link nav-cta"
              to="cta"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Try for free
            </Link>
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
