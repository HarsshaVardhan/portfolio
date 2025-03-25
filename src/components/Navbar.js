import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Resume">Resume</Link></li>

      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
