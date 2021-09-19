import { FormEvent, useState } from "react";
import useForm from "./hooks/useForm";
import SearchBar from "./components/searchBar/searchBar";
import useFetchSearchQuery from "./hooks/useFetchSearchQuery";
import Suggestions from "./components/searchSuggestions/suggestions";
import Bar from "./components/bar/bar";
import ThemeToggle from "./components/themeToggle/themeToggle";
import useTheme from "./hooks/useTheme";
import WeatherCard from "./components/weatherCard/weatherCard";
import { JSONData } from "./types/interface";
import "./scss/style.scss";

const App = () => {
  const { theme, themeToggleFn } = useTheme();
  const { formFields, handleChange } = useForm({ location: "" });
  const [weatherData, setWeatherData] = useState<JSONData>();
  const { searchQueryData, fetchError } = useFetchSearchQuery(
    formFields.location,
    [formFields.location]
  );
  const searchBarSubmitFn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (fetchError) {
      alert("There was an error fetching data");

      console.log(fetchError);
    } else {
      fetch("https://forcast-server.herokuapp.com/forcast", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          latitude: searchQueryData?.[0].lat,
          longitude: searchQueryData?.[0].lon,
        }),
      })
        .then((res) => res.json())
        .then((data: JSONData) => setWeatherData(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="app">
      <Bar className="app-title-bar">
        <span className="app-title-text">
          my<span className="weather-text">Weather</span>
        </span>
      </Bar>
      <Bar className="app-bar">
        <SearchBar
          className="location-search-bar"
          placeholder="search"
          formAction="/forcast"
          formMethod="post"
          list="search-box-suggestions"
          name="location"
          value={formFields.location}
          handleChange={handleChange}
          submissionAction={searchBarSubmitFn}
        />
        <Suggestions id="search-box-suggestions" resultData={searchQueryData} />
        <ThemeToggle theme={theme} toggleFunction={themeToggleFn} />
      </Bar>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
