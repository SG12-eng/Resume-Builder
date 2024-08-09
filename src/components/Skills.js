import React from "react";

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li className="item" key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
