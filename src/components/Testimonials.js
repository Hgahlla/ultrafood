import React from "react";

import testimonial1 from "../assets/customers/dave.jpg";
import testimonial2 from "../assets/customers/ben.jpg";
import testimonial3 from "../assets/customers/steve.jpg";
import testimonial4 from "../assets/customers/hannah.jpg";
import gallery1 from "../assets/gallery/gallery-1.jpg";
import gallery2 from "../assets/gallery/gallery-2.jpg";
import gallery3 from "../assets/gallery/gallery-3.jpg";
import gallery4 from "../assets/gallery/gallery-4.jpg";
import gallery5 from "../assets/gallery/gallery-5.jpg";
import gallery6 from "../assets/gallery/gallery-6.jpg";
import gallery7 from "../assets/gallery/gallery-7.jpg";
import gallery8 from "../assets/gallery/gallery-8.jpg";
import gallery9 from "../assets/gallery/gallery-9.jpg";
import gallery10 from "../assets/gallery/gallery-10.jpg";
import gallery11 from "../assets/gallery/gallery-11.jpg";
import gallery12 from "../assets/gallery/gallery-12.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section class="section-testimonials" id="testimonials">
      <div class="testimonials-container">
        <span class="subheading">Testimonials</span>
        <h2 class="heading-secondary">Once you try it, you can't go back</h2>

        <div class="testimonials">
          <figure class="testimonial">
            <img
              class="testimonial-img"
              alt="Customer Dave Bryson"
              src={testimonial1}
            />
            <blockquote class="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p class="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure class="testimonial">
            <img
              class="testimonial-img"
              alt="Customer Ben Hadley"
              src={testimonial2}
            />
            <blockquote class="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p class="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure class="testimonial">
            <img
              class="testimonial-img"
              alt="Customer Steve Miller"
              src={testimonial3}
            />
            <blockquote class="testimonial-text">
              Ultrafood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p class="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure class="testimonial">
            <img
              class="testimonial-img"
              alt="Customer Hannah Smith"
              src={testimonial4}
            />
            <blockquote class="testimonial-text">
              I got Ultrafood for the whole family, and it frees up so much
              time! Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p class="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div class="gallery">
        <figure class="gallery-item">
          <img
            src={gallery1}
            alt="Beautifully
      arranged food"
          />
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery2}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery3}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery4}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery5}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery6}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery7}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery8}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery9}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery10}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery11}
            alt="Beautifully
      arranged food"
          />
        </figure>
        <figure class="gallery-item">
          <img
            src={gallery12}
            alt="Beautifully
      arranged food"
          />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
