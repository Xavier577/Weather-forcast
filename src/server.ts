import {
  app,
  expressJsonParser,
  PORT,
  load_env,
  serveStatic,
} from "./config/app.config";
import path from "path";

app.use(expressJsonParser());
app.use(serveStatic(path.resolve(__dirname, "..", "client", "public")));

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

/* import express from 'express';
const axios = require("axios");
const { response } = require("express");
const WEATHERSTACK_API = process.env.WEATHERSTACK_API;
const OPENWEATHER_API = process.env.OPENWEATHER_API;

if (process.env.NODE_ENV !== "production") {
  //@ts-ignore
  require(dotenv).config();
}
const app = express();
const PORT = process.env.PORT || 8080;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${OPENWEATHER_API}`; //`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API}&query=New%York`

const app = express();
const PORT = process.env.PORT || 8080;

app.post("/forcast", (req, res) => {
  // this is to get data by geographic coordinates
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.lon}&appid=${OPENWEATHER_API}`
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.location}&appid=${OPENWEATHER_API}`; //`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API}&query=New%York`
  console.log(req.body.location);
  axios({
    url: API_URL,
    responseType: "json",
  })
    .then((data) => res.json(data.data))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running  port ${PORT} ...`)); */
