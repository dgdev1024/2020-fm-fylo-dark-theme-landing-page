import React from "react";
import Testimonial from "../testimonial";
import SatishPatelAvatar from "../../img/profile-1.jpg";
import BruceMckenzieAvatar from "../../img/profile-2.jpg";
import IvaBoydAvatar from "../../img/profile-3.jpg";
import "./index.scss";

const TestimonialsSection = () => (
  <div className="fm-testimonials-section">
    <div className="fm-container">
      <Testimonial
        name="Satish Patel"
        title="Founder &amp; CEO, Huddle"
        image={SatishPatelAvatar}
      >
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch, our team has become a well-oiled collaboration
        machine.
      </Testimonial>
      <Testimonial
        name="Bruce McKenzie"
        title="Freelance Web Designer"
        image={BruceMckenzieAvatar}
      >
        I often find myself traveling across the land, searching far and wide
        for the best views to snap pictures for my web designs, and I'm not
        always using the same computer for my views. Fylo has helped me greatly
        in making sure all of my files and assets are right in front of me.
      </Testimonial>
      <Testimonial
        name="Iva Boyd"
        title="Professional Musician"
        image={IvaBoydAvatar}
      >
        I use separate devices to work with my music - a desktop for recording,
        a laptop for playing live shows, and a tablet to quickly record new
        ideas. With Fylo, I've got everything I need anywhere, be it at the
        studio, on stage, or in the park.
      </Testimonial>
    </div>
  </div>
);

export default TestimonialsSection;
