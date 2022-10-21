import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloud.png",
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "9abaed0b9d9528a5275130c1d2682623";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&cnt=6&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app  bg-text">
            <form className="weather-search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control shadow-sm mt-2"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-sm-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-secondary shadow-sm w-100 mt-2"
                  />
                </div>
                <div className="col-sm-3">
                  <button
                    className="btn btn-light btn-sm shadown-sm w-100 mt-2"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
