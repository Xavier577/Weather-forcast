import axios from "axios";
import { fileRouter, OPENWEATHER_API_ID } from "../config/app";

const forcastRouter = fileRouter();

forcastRouter.post("/", (request, response) => {
  const { latitude, longitude } = request.body;
  if (longitude && latitude) {
    const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_ID}`;
    axios
      .get(queryUrl)
      .then((apiResponse) => response.send(apiResponse.data))
      .catch(({ errno, code, syscall, isAxiosError, protocol, host }) =>
        response.send({ errno, code, syscall, isAxiosError, protocol, host })
      );
  }
});

export default forcastRouter;
