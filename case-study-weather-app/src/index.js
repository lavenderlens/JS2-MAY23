console.log("index.js loaded");
import axios from "axios";
// const axios = require("axios");
//async call to axios
//you have the async work in the callback to the async function
axios
  .get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${51.478}&lon=${-0.0015}&exclude=minutely,hourly&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`
  )
  .then((response) => console.log(response.data.daily));
// without axios (Native fetch, only in Node 18>)
fetch(
  `https://api.openweathermap.org/data/3.0/onecall?lat=${51.478}&lon=${-0.0015}&exclude=minutely,hourly&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`
)
  .then((response) => response.json())
  .then((json) => console.log(json.daily));
const h1 = document.createElement("h1");
h1.innerHTML = "The Weather App stage 1";
document.body.appendChild(h1);

const p = document.createElement("p");
p.innerHTML =
  "You really think you can fly that thing? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I was part of something special. Must go faster. What do they got in there? King Kong? Must go faster... go, go, go, go, go! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?";
document.body.appendChild(p);
