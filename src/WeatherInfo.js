import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize">
              <FormatedDate date={props.data.date} />
              {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
              <br />
              Wind: <strong>{props.data.wind}m/s</strong>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="temperature-container d-flex justify-content-space-evenly ">
            <WeatherIcon code={props.data.icon} size={112} />
            <div>
              <span className="temperature">
                <WeatherTemperature celsius={props.data.temperature} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
