import React from "react";


export default function Weather() {
  let weatherData = {
    city: "New York",
    country: "USA",
    date: "Sunday 11:00",
    temperature: 10,
    description: "Partly cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    wind: 5,
  };
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
                  autoComplete="off"
                  className="form-control shadow-sm"
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-secondary shadow-sm"
                  id="enter-city"
                />
              </div>
              <div className="col-sm-3">
                <button
                  className="btn btn-light btn-sm shadown-sm w-100"
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>
          <h1>
            {" "}
            {weatherData.city}, {weatherData.country}
            <span></span>
          </h1>
          <ul>
            <li className="col-sm-6">
              Last updated at {weatherData.date}
              <br />
              <span> {weatherData.description} </span>
            </li>
            <br />
            <li className="col-sm-6"></li>
          </ul>

          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="weather-icon float-left"
                  id="icon"
                />
                <div className="float-left">
                  <span className="temperature"> </span>
                  <span className="units">
                    <a href="/" className="active">
                      <strong>{weatherData.temperature}</strong> ˚C{" "}
                    </a>
                    | <a href="/">˚F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} m/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

