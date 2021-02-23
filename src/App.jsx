import { useState, useEffect } from "react";
import "./App.css";
import "./request.json";

function App() {
  const [weatherInfo, setWeatherInfo] = useState("");
  useEffect(async () => {
    const data = require("./request.json");
    console.log(data);
    setWeatherInfo(data);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={weatherInfo?.current?.weather_icons} />
        <p>{weatherInfo?.current?.temperature}&#8451;</p>
        <p>{weatherInfo?.current?.pressure}mmhg</p>
        <p>{weatherInfo?.current?.weather_descriptions} </p>
        <p>{weatherInfo?.location?.country}</p>
      </header>
    </div>
  );
}

export default App;
