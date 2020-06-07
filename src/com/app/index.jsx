import React, { useState } from "react";
import Header from "../header";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main className={darkMode ? "dark" : ""}>
      <Header toggleDarkMode={toggleDarkMode} darkModeEnabled={darkMode} />
    </main>
  );
};

export default App;
