//imports TODO
import $ from "./$";
import WeatherTable from "./WeatherTable";
import "./WeatherForm.css";

// callback function to the async call to call the WeatherTable with the WeatherForm coordinates
export const display5Days = (data) => {
  const main = document.querySelector("main");
  main.replaceChild(WeatherTable(data), main.children[0]);
};

//WeatherForm function
const WeatherForm = () => {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.innerText = "Currently showing coordinates for your location.";
  legend.setAttribute("id", "loading");
  fieldset.appendChild(legend);
  let labelGroupLat = $(
    "label",
    "LATitude (-90 to 90):",
    {
      id: "latLable",
      for: "lat",
    },
    [
      $("input", null, {
        type: "number",
        id: "lat",
        placeholder: "must not be blank",
        autofocus: true,
      }),
    ]
  );
  fieldset.appendChild(labelGroupLat);
  let labelGroupLon = $(
    "label",
    "LONgitude (-180 to 180):",
    {
      id: "lonLable",
      for: "lon",
    },
    [
      $("input", null, {
        type: "number",
        id: "lon",
        placeholder: "must not be blank",
      }),
    ]
  );
  fieldset.appendChild(labelGroupLon);
  let searchButton = $(
    "button",
    "GET FORECAST",
    {
      type: "button",
      id: "find-weather-button",
      class: "font-semibold bg-blue-800 text-white animate-pulse",
    },
    []
  );
  fieldset.appendChild(searchButton);
  return fieldset;
};
export default WeatherForm;
