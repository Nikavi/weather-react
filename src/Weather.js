import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name}} is ${response.data.main.temp}°CThe weather in New York is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "9abaed0b9d9528a5275130c1d2682623";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&cnt=6&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return <p>Hello Weather!!!</p>;
}
