import React from "react";

const Experience = ({experience}) => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {experience.map((exp,index) => (
            <li key={index}>
                {exp.year} - {exp.company}, {exp.role}
            </li>
        ))}
 
      </ul>
    </div>
  );
};

export default Experience;
