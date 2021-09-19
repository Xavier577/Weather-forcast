import { FC } from "react";
import { JSONData } from "../../types/interface";

const WeatherCard: FC<{ weatherData?: JSONData }> = ({ weatherData }) => {
  const temp = weatherData?.main?.temp || 0;
  const humidity = weatherData?.main?.temp || 0;
  const pressure = weatherData?.main?.pressure || 0;
  const weatherSpeed = weatherData?.wind?.speed || 0;
  const weatherDirection = weatherData?.wind?.deg || 0;
  const atmPressure = parseFloat(pressure as string) / 1013.35;
  return (
    <div className="weather-card-container">
      <div className="weather-card">
        <div className="location-info">
          <h1>Overcast</h1>
          {weatherData
            ? weatherData.name
              ? `${weatherData?.name}, ${weatherData?.sys?.country}`
              : "location not found"
            : "Search for a location...."}
        </div>

        <div className="forcasts">
          <span className="individual-forcast">
            Humidity <span className="forcast-value">{humidity}</span>
          </span>
          <span className="individual-forcast">
            Temperature <span className="forcast-value">{`${temp} K`}</span>
          </span>
          <span className="individual-forcast">
            Pressure{" "}
            <span className="forcast-value">{`${atmPressure.toPrecision(
              3
            )} atm`}</span>
          </span>
        </div>
        <h1>Wind</h1>
        <div className="forcasts">
          <span className="individual-forcast">
            Speed <span className="forcast-value"> {weatherSpeed}</span>
          </span>
          <span className="individual-forcast">
            Degree{" "}
            <span className="individual-forcast">{`${weatherDirection} deg`}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
