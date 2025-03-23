import React from "react";
import SocialLink from "./SocialLink";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-first">
        <h3>I am Muhammad Saim</h3>
        <h1>Full-Stack Web Developer.</h1>
        <p>
          I am honing my skills in full-stack development, eager to turn ideas
          into functional web applications.
        </p>
        <div className="hero-first-child">
          <a href="/pdf/Muhammad Saim Web Developer CV.pdf" download>
            <span>Download CV</span>
            <i className="fa-solid fa-download"></i>
          </a>
          <div className="hero-social-link-container">
            <SocialLink link="https://www.linkedin.com/in/muhammad-saim-khanzada/">
              <i className="fa-brands fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink link="https://github.com/msaimkz">
              <i className="fa-brands fa-github"></i>
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="hero-second">
        <img src="./images/avater.avif" alt="" />
      </div>
    </section>
  );
};

export default About;
