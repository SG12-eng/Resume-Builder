import React from "react";
import "./ToggleSwitch.css"

const ToggleSwitch = ({toggleTheme, theme}) => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" 
        onChange={toggleTheme}
        checked={theme === 'dark'} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
