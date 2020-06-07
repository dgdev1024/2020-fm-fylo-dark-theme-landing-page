import React from "react";
import IntroImage from "../../img/illustration-intro.png";
import "./index.scss";

const HeroSection = () => (
  <div className="fm-hero-section">
    <div className="fm-container">
      <img
        src={IntroImage}
        alt="All Your Files, Secure and Accessible Anywhere"
      />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
      <button className="fm-call-to-action">Get Started</button>
    </div>
  </div>
);

export default HeroSection;
