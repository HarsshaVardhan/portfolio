import React, { useState } from "react";
import "../styles/Resume.css";

function Resume() {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className="resume-container">
      <h1>Resume</h1>
      {!error ? (
        <iframe 
          src={`${process.env.PUBLIC_URL}/Resume.pdf`}
          className="resume-frame"
          onError={handleError}
          title="Resume"
        />
      ) : (
        <div className="error-message">
          <p>Unable to load the resume. Please try again later.</p>
        </div>
      )}
    </div>
  );
}

export default Resume;