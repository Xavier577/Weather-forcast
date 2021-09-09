import axios from "axios";
import { fileRouter, OPENWEATHER_API_ID } from "../config/app";

const forcastRouter = fileRouter();

forcastRouter.post("/", (request, response) => {
  console.log(request.body);
  const { latitude, longitude } = request.body;
  if (longitude && latitude) {
    const queryUrl = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_ID}`;
    axios
      .get(queryUrl)
      .then((apiResponse) => response.send(apiResponse.data))
      .catch((error) => response.send(error));
  }
});

export default forcastRouter;
