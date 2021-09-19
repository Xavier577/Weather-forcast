import axios from "axios";
import { fileRouter, OPENWEATHER_API_ID } from "../config/app";

const locationSearchQueryRouter = fileRouter();

locationSearchQueryRouter.post("/", (request, response) => {
  const { searchQuery } = request.body;
  if (searchQuery && OPENWEATHER_API_ID) {
    const geoQueryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${OPENWEATHER_API_ID}`;
    axios
      .get(geoQueryUrl)
      .then((apiResponse) => {
        response.send(apiResponse.data);
      })
      .catch(({ errno, code, syscall, isAxiosError, protocol, host }) =>
        response.send({ errno, code, syscall, isAxiosError, protocol, host })
      );
  } else if (!OPENWEATHER_API_ID) {
    response.send({ errMessage: "Missing Api Key" });
  } else {
    response.send({ errMessage: "Server Error" });
  }
});

export default locationSearchQueryRouter;
