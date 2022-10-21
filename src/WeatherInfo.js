import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <h1> {props.data.city}</h1>
          <ul>
            <li className="col-sm-6">
                    <FormatedDate date={props.data.date} />
                    </li>
             <li className="text-capitalize"> {props.data.description} </li>
           
            <br />
          </ul>
          <div className="row mt-3">
            <div className="col-sm-6">
              <div className="clearfix">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  className="float-left"
                />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(props.data.temperature)}
                  </span>
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
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {Math.round(props.data.wind)} m/h</li>
              </ul>
            </div>
          </div>
        </div>   
    );
}