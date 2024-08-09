import React from "react";

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div className="item" key={index}>
          <p>{edu.year} - {edu.institution}</p>
          <p>Degree: {edu.degree}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;