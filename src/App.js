import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">
          <Weather defaultCity="London"/>
        </header>
        <footer>
          <small class="link text-center">
            This project was coded by
            <a
              href="https://www.linkedin.com/in/veronika-kulikova-455b47243/"
              rel="noopener"
            >
              {" "}
              Veronika Kulikova{" "}
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Nikavi/My-weather-project"
              rel="noopener"
            >
              open-sourced on GitHub{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://mellow-clafoutis-bd26f4.netlify.app/"
              rel="noopener"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
