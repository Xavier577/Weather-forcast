import axios from "axios";
import { fileRouter, OPENWEATHER_API_ID } from "../config/app";

const locationSearchQueryRouter = fileRouter();

locationSearchQueryRouter.post("/", (request, response) => {
  const { searchQuery } = request.body;
  const geoQueryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${OPENWEATHER_API_ID}`;
  if (searchQuery) {
    axios
      .get(geoQueryUrl)
      .then((apiResponse) => {
        response.send(apiResponse.data);
      })
      .catch(({ errno, code, syscall, isAxiosError, protocol, host }) =>
        response.send({ errno, code, syscall, isAxiosError, protocol, host })
      );
  }
});

export default locationSearchQueryRouter;
