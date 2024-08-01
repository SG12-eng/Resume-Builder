import "./App.css";
import Resume from "./components/Resume";

function App() {
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

  return (
    <div className="App">
      <Resume data={resumeData} />
    </div>
  );
}

export default App;
