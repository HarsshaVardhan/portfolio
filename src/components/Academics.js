import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import "../styles/Academics.css";

const Academics = () => {
  return (
    <div className="academics-container">
      <h1>📚 Academics</h1>

      <div className="academics-grid">
        {/* B.Tech */}
        <div className="academic-card">
          <FaGraduationCap className="icon" />
          <h2>B.Tech - Computer Science</h2>
          <h3>Koneru Lakshmaiah Education Foundation (KLEF), KL University</h3>
          <p>📍 Guntur | 🗓 2021 - 2025 | 📊 CGPA: 9.34</p>
          <p>
            <strong>Coursework:</strong> Software Engineering, Java, C, AI, ML, Deep Learning, UI/UX, 
            Data Structures, Full Stack Java Development, DBMS
          </p>
        </div>

        {/* Intermediate */}
        <div className="academic-card">
          <FaSchool className="icon" />
          <h2>Intermediate (12th)</h2>
          <h3>Sri Chaitanya Junior College</h3>
          <p>📍 Guntur | 🗓 Percentage: 77%</p>
        </div>

        {/* 10th Standard */}
        <div className="academic-card">
          <FaUniversity className="icon" />
          <h2>10th Standard</h2>
          <h3>Sri Chaitanya Techno School</h3>
          <p>📍 Guntur | 🗓 GPA: 9.5</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
