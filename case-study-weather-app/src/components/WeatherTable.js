import $ from "./$";

const tableStyles = "";
const rowStyles = "";

// helper function to show day of week
const calcDay = (weather, i) => {
  // this function gets the day of the week from the timestamp in the data
  // have to add in a &units=metric param to the API call
  return Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
    new Date(weather.daily[i].dt * 1000)
  );
};

const WeatherTable = (weather) => {
  let table = $("table", null);
  let thead = $("thead", null);
  let tbody = $("tbody", null);
  let tr1 = $("tr", null);
  let tr2 = $("tr", null);

  // table header row
  tr1.appendChild($("th", `${calcDay(weather, 1)}`));
  tr1.appendChild($("th", `${calcDay(weather, 2)}`));
  tr1.appendChild($("th", `${calcDay(weather, 3)}`));
  tr1.appendChild($("th", `${calcDay(weather, 4)}`));
  tr1.appendChild($("th", `${calcDay(weather, 5)}`));

  //table body row
  tr2.appendChild($("td", `${weather.daily[1].weather[0].description}`));
  tr2.appendChild($("td", `${weather.daily[2].weather[0].description}`));
  tr2.appendChild($("td", `${weather.daily[3].weather[0].description}`));
  tr2.appendChild($("td", `${weather.daily[4].weather[0].description}`));
  tr2.appendChild($("td", `${weather.daily[5].weather[0].description}`));

  // put the whole table together
  thead.appendChild(tr1);
  tbody.appendChild(tr2);
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
};
export default WeatherTable;
