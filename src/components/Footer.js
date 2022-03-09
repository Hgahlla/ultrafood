import React from "react";

import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img class="logo" alt="Ultrafood logo" src={logo} />
          </a>

          <ul class="social-links">
            <li>
              <a
                class="footer-link"
                href="https://www.instagram.com/thedogist"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a
                class="footer-link"
                href="https://twitter.com/thedogist"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a
                class="footer-link"
                href="https://www.facebook.com/thedogist"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; 2027 by Ultrafood, Inc. All rights reserved.
          </p>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              3030 Nowitzki Way, <br /> Dallas, TX 75202
            </p>
            <p>
              <a class="footer-link" href="tel:214-777-4141">
                214-777-4141
              </a>
              <br />
              <a class="footer-link" href="mailto:contact@ultrafood.com">
                contact@ultrafood.com
              </a>
            </p>
          </address>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a
                class="footer-link"
                href="https://apps.apple.com/us/app/ultrafood/id341232717"
                target="_blank"
                rel="noreferrer noopener"
              >
                iOS app
              </a>
            </li>
            <li>
              <a
                class="footer-link"
                href="https://play.google.com/store/apps/details?id=com.ultrafood.android"
                target="_blank"
                rel="noreferrer noopener"
              >
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                About Ultrafood
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Cooking partners
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
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
