import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date:"Monday 12:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloud.png",
      description: response.data.weather[0].description
    });
   
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app  bg-text">
          <form className="weather-search-form">
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control shadow-sm mt-2"
                  autoFocus="on"
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
          <h1>
            {" "}
           {weatherData.city}
          </h1>
          <ul>
            <li className="col-sm-6">
              {weatherData.date}
              <br />
              <li className="text-capitalize"> {weatherData.description} </li>
            </li>
            <br />
            <li className="col-sm-6"></li>
          </ul>
          <div className="row mt-3">
            <div className="col-sm-6">
              <div className="clearfix">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">{Math.round(weatherData.temperature)}</span>
                  <span className="unit">
                    <a href="/" className="active">
                      ˚C{" "}
                    </a>
                    | <a href="/">˚F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {Math.round(weatherData.wind)} m/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey = "9abaed0b9d9528a5275130c1d2682623";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&cnt=6&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
