import React from "react";
import Logo from "../svg/logo";
import IconLocation from "../svg/icon-location";
import IconPhone from "../svg/icon-phone";
import IconEmail from "../svg/icon-email";
import "./index.scss";

const Footer = () => (
  <footer>
    <div className="fm-container" id="early-access">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extermely
        generous. If you have any questions, our support team would be happy to
        help you.
        <div className="fm-form">
          <input
            type="email"
            aria-label="Email Address"
            placeholder="email@example.com"
          />
          <button className="fm-call-to-action">Get Started For Free</button>
        </div>
      </p>
    </div>
    <div className="fm-container">
      <div className="fm-logo">
        <Logo viewBox="0 0 176 52" />
      </div>
      <div className="fm-footer-body">
        <div className="fm-contact-one">
          <div className="fm-contact-info">
            <IconLocation />
            <p>
              9943 File System Lane
              <br />
              Solidstate, MI 04423
            </p>
          </div>
        </div>
        <div className="fm-contact-two">
          <div className="fm-contact-info">
            <IconPhone />
            <p>+1-543-123-4567</p>
          </div>
          <div className="fm-contact-info">
            <IconEmail />
            <p>contact@fylo.com</p>
          </div>
        </div>
        <div className="fm-links-one">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </div>
        <div className="fm-links-two">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div className="fm-social-links">
          <a href="#" id="facebook" aria-label="Facebook" title="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" id="twitter" aria-label="Twitter" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" id="instagram" aria-label="Instagram" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
