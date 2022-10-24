import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1> {props.data.city}</h1>
        <ul>
          <li className="col-sm-6">
            <FormatedDate date={props.data.date} />
          </li>
          <li className="text-capitalize"> {props.data.description} </li>
        </ul>
        <div className="row mt-3">
          <div className="col-sm-6">
            <div className="clearfix">
              <div className="float-left icon">
                <WeatherIcon
                  code={props.data.icon} size={52}
                />
              </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />               
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} m/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}