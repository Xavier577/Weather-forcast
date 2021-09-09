import useForm from "./hooks/useForm";
import { sendToServer } from "./utils";
import "./scss/style.scss";
import SearchBar from "./components/searchBar/searchBar";
import useGeolocator from "./hooks/useGeolocator";
import { useEffect } from "react";
import axios from "axios";
import useFetchSearchQuery from "./hooks/useFetchSearchQuery";
import Suggestions from "./components/searchSuggestions/suggestions";

const App = () => {
  const { formFields, handleChange } = useForm({ location: "" });
  const { position, geoLocatorError } = useGeolocator();
  const { searchQueryData, fetchError } = useFetchSearchQuery(
    formFields.location,
    [formFields.location]
  );

  useEffect(() => {
    if (geoLocatorError?.PERMISSION_DENIED) {
      //console.log("permission denied");
    } else if (geoLocatorError?.message) {
      // console.log(geoLocatorError.message);
    } else {
      //  console.log(position?.coords);
      fetch("/usercoords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          latitude: position?.coords.latitude,
          longitude: position?.coords.longitude
        })
      }).then((res) => console.log(res));
    }
  }, []);

  return (
    <div>
      <h1>Weather forcast</h1>{" "}
      <SearchBar
        list="search-box-suggestions"
        name="location"
        value={formFields.location}
        handleChange={handleChange}
        submissionAction={(event) => {
          event.preventDefault();
        }}
      />
      <Suggestions id="search-box-suggestions" resultData={searchQueryData} />
    </div>
  );
};

export default App;
