import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Milan" />
        
        <footer>
            This project was coded by
            <a
              href="https://www.linkedin.com/in/veronika-kulikova-455b47243/"
               target="_blank"
            rel="noopener noreferrer"
            >
              {" "}
              Veronika Kulikova{" "}
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Nikavi/My-weather-project"
              target="_blank"
            rel="noopener noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://mellow-clafoutis-bd26f4.netlify.app/"
               target="_blank"
            rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
        </footer>
      </div>
    </div>
  );
}
