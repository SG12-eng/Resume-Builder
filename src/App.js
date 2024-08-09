import "./App.css";
import "./components/Resume.css"
import Resume from "./components/Resume";
import Border from "./components/Border";
import React,{ useState } from "react";
import ToggleSwitch from "./components/ToggleSwitch";


function App() {
  const [theme, setTheme] = useState('light')

  const resumeData = {
    experience: [
      { year: 2012, 
        company: "Larsen-Turbo", 
        role: "Analyst" 
      }
      ],
    education: [
      {
        year : 2008,
        institution: "IIT Bombay",
        degree: "Btech Computer Science",
      },
    ],
    skills: ["react js", "node js", "MongoDb", "AWS"],
  };

  const toggleTheme =() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <ToggleSwitch toggleTheme={toggleTheme} theme={theme}></ToggleSwitch>
      <Border>
      <Resume data={resumeData} theme={theme}/>
      </Border>
    </div>
  );
}

export default App;
