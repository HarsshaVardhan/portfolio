import React from "react";

function Resume() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Resume</h1>
      <iframe 
        src={process.env.PUBLIC_URL + "/resume.pdf"} 
        width="80%" 
        height="600px"
        style={{ border: "none" }}
        title="Resume"
      ></iframe>


    </div>
  );
}

export default Resume;
