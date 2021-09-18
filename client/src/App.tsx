import useForm from "./hooks/useForm";
import SearchBar from "./components/searchBar/searchBar";
import useGeolocator from "./hooks/useGeolocator";
import { FormEvent, useEffect, useState } from "react";
import useFetchSearchQuery from "./hooks/useFetchSearchQuery";
import Suggestions from "./components/searchSuggestions/suggestions";
import { ApiData } from "./types/types";
import Bar from "./components/bar/bar";
import ThemeToggle from "./components/themeToggle/themeToggle";
import useTheme from "./hooks/useTheme";
import "./scss/style.scss";

const App = () => {
  const { theme, themeToggleFn } = useTheme();
  const { formFields, handleChange } = useForm({ location: "" });
  const [weatherData, setWeatherData] = useState<ApiData>();
  // const { position, geoLocatorError } = useGeolocator();
  const { searchQueryData, fetchError } = useFetchSearchQuery(
    formFields.location,
    [formFields.location]
  );

  const searchBarSubmitFn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("/forcast", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        latitude: searchQueryData?.[0].lat,
        longitude: searchQueryData?.[0].lon
      })
    })
      .then((res) => res.json())
      .then((data: ApiData) => setWeatherData(data))
      .catch((err) => console.log(err));
  };

  /*  useEffect(() => {
    if (geoLocatorError?.PERMISSION_DENIED) {
      //console.log("permission denied");
    } else if (geoLocatorError?.message) {
      // console.log(geoLocatorError.message);
    } else {
      //  console.log(position?.coords);
      fetch("/forcast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          latitude: position?.coords.latitude,
          longitude: position?.coords.longitude
        })
      })
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((error) => error);
    }
  }, [position]); */

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
      <pre>{JSON.stringify(weatherData, null, 4)}</pre>
    </div>
  );
};

export default App;
