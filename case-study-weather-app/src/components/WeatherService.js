const WeatherService = (lat, lon, asyncCallback) => {
  // no return but async Fetch call here
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`
  )
    .then((response) => response.json())
    .then((weather) => asyncCallback(weather));
};
export default WeatherService;
