import React from "react";
import Logo from "../svg/logo";
import "./index.scss";

const Header = ({ toggleDarkMode, darkModeEnabled }) => (
  <header>
    <div className="fm-container">
      <div className="fm-logo">
        <Logo viewBox="0 0 176 52" />
      </div>
      <nav>
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
        <a href="#" onClick={toggleDarkMode}>
          {darkModeEnabled ? "Light" : "Dark"}
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
