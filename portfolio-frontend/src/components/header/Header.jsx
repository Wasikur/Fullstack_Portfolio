import React, { useState, useEffect } from "react";
import "./header_styles.css";
import portfolio from "../assets/portfolio_logo.gif";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Navlinks from "../nav/navlinks/Navlinks";
import Hamburger from "../nav/hamburger/Hamburger";

const Header = () => {
  // Dark Mode Handling
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store theme preference in local storage
  };

  useEffect(() => {
    // Check for theme preference in local storage on component mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav id="desktop-nav">
        <div id="upper_logo">
          <img src={portfolio} alt="portfolio_gif" />
        </div>
        <div>
          <Navlinks />
        </div>
        <button id="toggle_icon" onClick={toggleTheme}>
          {theme === "light-theme" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </button>
      </nav>
      <Hamburger />
    </>
  );
};

export default Header;
