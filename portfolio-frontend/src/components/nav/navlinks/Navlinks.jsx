import React from "react";
import "./navlinks_styles.css";

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navlinks;
