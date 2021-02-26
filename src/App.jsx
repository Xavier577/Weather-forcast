import React, { useState, useEffect, Fragment } from "react";
import SearchBar from "./components/search-bar/SearchBar";
import "./request.json";
import "./App.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState("");
  useEffect(() => {
    const data = require("./request.json");
    console.log(data);
    setWeatherInfo(data);
  }, []);
  return (
    <Fragment>
      <div className="App">
        <SearchBar />
        <div className="panels">
          <img src={weatherInfo?.current?.weather_icons} alt="" />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
