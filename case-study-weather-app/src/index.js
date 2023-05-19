console.log("index.js loaded");
import axios from "axios";
import { H1, Para } from "./components/functions";
import WeatherTable from "./components/WeatherTable";
import WeatherForm from "./components/WeatherForm";
import WeatherService from "./components/WeatherService";
import { display5Days } from "./components/WeatherForm";
import $ from "./components/$";

axios //this only populates the console
  .get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${51.478}&lon=${-0.0015}&exclude=minutely,hourly&units=metric&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`
  )
  .then((response) => console.log(response.data.daily));
/**
 *
 * architecture of app now does this:
 * renders Form
 * takes coords from user via Form
 * passes them and a callback to Service
 * Service callback renders Table
 * only smart component is Service
 * Form component just takes input from user
 * Table component just renders whatever data is supplied to it as props
 *
 */
document.body.appendChild(H1("The Weather App stage 3"));
document.body.appendChild(WeatherForm());
let lat = document.querySelector("#lat");
let lon = document.querySelector("#lon");
document.querySelector("#find-weather-button").addEventListener("click", () => {
  WeatherService(Number(lat.value), Number(lon.value), display5Days);
  document.querySelector("#find-weather-button").innerHTML =
    "GET ANOTHER FORECAST";
});

document.body.appendChild(Para("5-day forecast"));

const main = document.createElement("main");
document.body.appendChild(main);
main.appendChild(
  $("p", " \nEnter different coordinates above for another area forecast.")
);
