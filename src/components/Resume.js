import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";


const Resume = ({ data, theme }) => {
  return (
    <div className={ `resume ${theme}`}>
      <h1>Resume</h1>
      <div className="section">
        <Skills skills={data.skills} />
      </div>
      <div className="section">
        <Education education={data.education} />
      </div>
      <div className="section">
        <Experience experience={data.experience} />
      </div>
    </div>
  );
};

export default Resume;