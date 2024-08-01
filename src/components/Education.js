import React from "react";

const Education = ({ education }) => {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.year} - {edu.institution}, {edu.degree}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;