console.log("index.js loaded");
import axios from "axios";
import { H1, Para } from "./components/functions";
import WeatherTable from "./components/WeatherTable";

axios
  .get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${51.478}&lon=${-0.0015}&exclude=minutely,hourly&units=metric&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`
  )
  .then((response) => console.log(response.data.daily));
// without axios (Native fetch, only in Node 18>)
fetch(
  `https://api.openweathermap.org/data/3.0/onecall?lat=${51.478}&lon=${-0.0015}&exclude=minutely,hourly&units=metric&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`
)
  .then((response) => response.json())
  .then((weather) => document.body.appendChild(WeatherTable(weather)));

// .then((json) => console.log(json.daily));
// .then(
//   (json) => (DOMContent.innerHTML = json.daily[0].weather[0].description)
// );
// .then((json) => logMultipleLevelsOfData(json)); // we can pass in any callback here
// as long as it is in the PROMISE CHAIN
// so let's design a table to display the weather - the bits we want

// $ = (type, text, attributes = {}, children = [])

document.body.appendChild(H1("The Weather App stage 2"));
document.body.appendChild(
  Para(
    "You really think you can fly that thing? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I was part of something special. Must go faster. What do they got in there? King Kong? Must go faster... go, go, go, go, go! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?"
  )
);
let DOMContent = document.createElement("p");
document.body.appendChild(DOMContent);
function logMultipleLevelsOfData(data) {
  console.log(data);
  console.log(data.current.weather[0].main);
  console.log(data.daily[0].weather[0].description);
}
