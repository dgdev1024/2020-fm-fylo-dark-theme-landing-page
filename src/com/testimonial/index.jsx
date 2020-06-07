import React from "react";
import "./index.scss";

const Testimonial = ({ name, title, image, children }) => (
  <div className="fm-testimonial">
    <p>{children}</p>
    <div className="fm-author">
      <img src={image} alt={`${name}, ${title}`} />
      <p>
        <strong>{name}</strong>
        <br />
        {title}
      </p>
    </div>
  </div>
);

export default Testimonial;
