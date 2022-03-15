import React from "react";
import { animateScroll } from "react-scroll";

import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <div class="footer-logo">
            <img
              className="logo"
              alt="Ultrafood logo"
              src={logo}
              onClick={() => animateScroll.scrollToTop()}
            />
          </div>

          <ul className="social-links">
            <li>
              <a
                className="footer-link"
                href="https://www.instagram.com/thedogist"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://twitter.com/thedogist"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://www.facebook.com/thedogist"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} by Ultrafood, Inc. All
            rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              3030 Nowitzki Way, <br /> Dallas, TX 75202
            </p>
            <p>
              <a className="footer-link" href="tel:214-777-4141">
                214-777-4141
              </a>
              <br />
              <a className="footer-link" href="mailto:contact@ultrafood.com">
                contact@ultrafood.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/ ">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Sign in
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://apps.apple.com/us/app/ultrafood/id341232717"
                target="_blank"
                rel="noreferrer noopener"
              >
                iOS app
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                href="https://play.google.com/store/apps/details?id=com.ultrafood.android"
                target="_blank"
                rel="noreferrer noopener"
              >
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                About Ultrafood
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Cooking partners
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
