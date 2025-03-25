// src/components/Home.js
import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-content">
        <h1>G Harsha Vardhan Reddy</h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Developer", "AI Enthusiast", "Problem Solver"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/gudibandi-harsha-vardhan-reddy-210b33242/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://github.com/HarsshaVardhan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon github" />
          </a>
          <a href="https://www.instagram.com/harssha_reddy/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
        </div>
      </div>
      
      <img src="/images/profile.jpg" alt="Profile" className="profile-img" />
    </div>
  );
};

export default Home;
