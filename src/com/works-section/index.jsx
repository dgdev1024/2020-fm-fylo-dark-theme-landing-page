import React from "react";
import ImageProductive from "../../img/illustration-stay-productive.png";
import IconArrow from "../svg/icon-arrow";
import "./index.scss";

const WorksSection = () => (
  <div className="fm-works-section">
    <div className="fm-container">
      <img src={ImageProductive} alt="Stay Productive" />
      <div className="fm-caption">
        <h2>Stay Productive, wherever you are.</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
          <br />
          <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#">
          See how Fylo works <IconArrow />
        </a>
      </div>
    </div>
  </div>
);

export default WorksSection;
