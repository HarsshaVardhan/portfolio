import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      {/* Skills Section */}
      <h1 className="skills-heading">🚀 Skills</h1>
      <div className="skills-grid">
        <div className="skill-card">
          <h2>Programming</h2>
          <img src="/images/programming.png" alt="Programming" className="skill-image" />
          <p>Java | Python | C</p>
        </div>

        <div className="skill-card">
          <h2>Web Development</h2>
          <img src="/images/web.png" alt="Web Development" className="skill-image" />
          <p>Spring Boot | Django</p>
        </div>

        <div className="skill-card">
          <h2>Machine Learning</h2>
          <img src="/images/ml.png" alt="Machine Learning" className="skill-image" />
          <p>Feature Extraction | Computer Vision</p>
        </div>

        <div className="skill-card">
          <h2>Tools</h2>
          <img src="/images/tools.png" alt="Tools" className="skill-image" />
          <p>Git | LaTeX | Automation Anywhere RPA | VSC</p>
        </div>
      </div>

      {/* Certifications Section */}
      <h1 className="certifications-heading">🎓 Certifications</h1>
      <div className="certifications-grid">
        <div className="certification-card">
          <h2>Automation Anywhere</h2>
          <img src="/images/RPA.png" alt="Automation Anywhere" className="certification-image" />
        </div>

        <div className="certification-card">
          <h2>Cloud Practitioner</h2>
          <img src="/images/cp.png" alt="Cloud Practitioner" className="certification-image" />
        </div>

        <div className="certification-card">
          <h2>AI-900</h2>
          <img src="/images/ai900.png" alt="AI-900" className="certification-image" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
