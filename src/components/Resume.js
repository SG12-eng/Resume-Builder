import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const Resume = ({ data }) => {
  return (
    <div>
      <h1>Resume</h1>
      <Skills skills={data.skills} />
      <Education education={data.education} />
      <Experience experience={data.experience} />
    </div>
  );
};

export default Resume;
