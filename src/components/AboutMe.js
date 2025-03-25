import React from "react";
import { FaJava, FaReact, FaDatabase, FaRobot, FaGamepad, FaProjectDiagram, FaBrain } from "react-icons/fa";
import { SiSpringboot, SiDjango, SiOpencv, SiMongodb, SiMysql, SiPython } from "react-icons/si";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm <strong>G Harsha Vardhan Reddy</strong>, a passionate developer skilled in 
          <FaJava className="icon" /> <strong>Java</strong>, <SiSpringboot className="icon" /> <strong>Spring Boot</strong>,  
          <FaReact className="icon" /> <strong>React</strong>, and <SiDjango className="icon" /> <strong>Django</strong>.  
          I enjoy solving real-world problems through code and continuously learning new technologies.
        </p>

        <h2><FaProjectDiagram className="icon" /> Web Development Projects</h2>
        <ul>
          <li>
            <strong>Online Bidding System</strong> (Spring Boot, MySQL)
            <ul>
              <li>Developed a secure and scalable auction platform.</li>
              <li>Implemented JWT-based authentication and RBAC.</li>
              <li>Optimized <SiMysql className="icon" /> <strong>MySQL</strong> database schema for efficiency.</li>
              <li>Used <strong>Git & GitHub</strong> for version control.</li>
            </ul>
          </li>
          <li>
            <strong>Chat Application</strong> (React, TypeScript, Chat Engine)
            <ul>
              <li>Built a real-time messaging platform with seamless UI/UX.</li>
              <li>Integrated WebSockets for fast communication.</li>
            </ul>
          </li>
        </ul>

        <h2><FaBrain className="icon" /> Machine Learning & Image Processing</h2>
        <ul>
          <li>
            <strong>Grape Quality Prediction for Winemaking</strong>  
            <ul>
              <li>Used image processing and ML techniques to classify grape quality.</li>
              <li>Applied color, shape, and texture analysis for feature extraction.</li>
            </ul>
          </li>
          <li>
            <strong>Real-Time Age & Gender Detection</strong>
            <ul>
              <li>Implemented <SiOpencv className="icon" /> OpenCV, CNN, and DNN for real-time predictions.</li>
              <li>Optimized accuracy for facial recognition applications.</li>
            </ul>
          </li>
        </ul>

        <h2><FaRobot className="icon" /> Additional Interests</h2>
        <ul>
          <li>Exploring <strong>user experience (UX)</strong> in different applications.</li>
          <li><FaGamepad className="icon" /> Interested in gaming to understand <strong>gameplay mechanics</strong>.</li>
          <li>Worked on creating bots using <strong>Automation Anywhere</strong>.</li>
          <li>Currently working on integrating bots into web applications.</li>
        </ul>
      </div>
      <img src="/images/profile.jpg" alt="Profile" className="about-img" />
    </div>
  );
};

export default AboutMe;
