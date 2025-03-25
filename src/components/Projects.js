import React from "react";
import "../styles/Projects.css";
import { FaRobot, FaBrain, FaChalkboardTeacher, FaGavel, FaComments } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>🚀 Projects</h1>
      <p>Here are some of my key projects:</p>

      <div className="projects-list">
        {/* Grape Quality Prediction */}
        <div className="project-card">
          <img src="/images/grape.png" alt="Grape Quality Prediction" className="project-img" />
          <div className="project-info">
            <FaBrain className="project-icon" />
            <h2>Grape Quality Prediction</h2>
            <p>Using ML and image processing techniques to classify grape quality for winemaking.</p>
          </div>
        </div>

        {/* Real-Time Age & Gender Detection */}
        <div className="project-card">
          <img src="/images/realtime.png" alt="Real-Time Age & Gender Detection" className="project-img" />
          <div className="project-info">
            <FaRobot className="project-icon" />
            <h2>Real-Time Age & Gender Detection</h2>
            <p>A computer vision-based project using deep learning for real-time age & gender recognition.</p>
          </div>
        </div>

        {/* E-learning Platform */}
        <div className="project-card">
          <img src="/images/elearning.png" alt="E-learning Platform" className="project-img" />
          <div className="project-info">
            <FaChalkboardTeacher className="project-icon" />
            <h2>E-learning Platform</h2>
            <p>Built with Django for a seamless online education experience.</p>
          </div>
        </div>

        {/* Online Bidding System */}
        <div className="project-card">
          <img src="/images/auction.png" alt="Online Bidding System" className="project-img" />
          <div className="project-info">
            <FaGavel className="project-icon" />
            <h2>Online Bidding System</h2>
            <p>Secure and scalable auction platform implemented with JWT authentication.</p>
          </div>
        </div>

        {/* Chat Application */}
        <div className="project-card">
          <img src="/images/chatapplication.png" alt="Chat Application" className="project-img" />
          <div className="project-info">
            <FaComments className="project-icon" />
            <h2>Chat Application</h2>
            <p>Built using React, TypeScript, and Chat Engine for real-time messaging.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
