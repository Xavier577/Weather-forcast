import axios from "axios";
import { fileRouter, OPENWEATHER_API_ID } from "../config/app";

const locationSearchQueryRouter = fileRouter();

locationSearchQueryRouter.post("/", (request, response) => {
  const { searchQuery } = request.body;
  console.log(request.body);
  const geoQueryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${OPENWEATHER_API_ID}`;
  console.log(geoQueryUrl);
  if (searchQuery) {
    axios
      .get(geoQueryUrl)
      .then((apiResponse) => {
        console.log(apiResponse.data);
        response.send(apiResponse);
      })
      .catch((error) => console.log(error));
  } else {
    console.log("error: search query empty");
  }
});

export default locationSearchQueryRouter;
