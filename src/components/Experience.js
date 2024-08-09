import React from "react";

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div className="item" key={index}>
          <p>{exp.year} - {exp.company}</p>
          <p>Role: {exp.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience