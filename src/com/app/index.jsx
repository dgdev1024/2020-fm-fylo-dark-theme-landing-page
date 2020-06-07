import React, { useState } from "react";
import Header from "../header";
import HeroSection from "../hero-section";
import FeaturesSection from "../features-section";
import WorksSection from "../works-section";
import TestimonialsSection from "../testimonials-section";
import Footer from "../footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = (ev) => {
    ev.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <main className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} darkModeEnabled={darkMode} />
      <HeroSection />
      <FeaturesSection />
      <WorksSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default App;
