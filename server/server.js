require("dotenv").config();

const WEATHERSTACK_API = process.env.WEATHERSTACK_API;
const OPENWEATHER_API = process.env.OPENWEATHER_API;
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => console.log(`server running  port ${PORT} ...`));
