import express from "express";

export const app = express();
export const serveStatic = express.static;
export const bodyParser = express.urlencoded;
export const expressJsonParser = express.json;
export const PORT = process.env.PORT || 3000;
export const OPENWEATHER_API_ID = process.env.OPENWEATHER_API_ID;
export const load_env = () => {
  if (process.env.NODE_ENV !== "production") {
    const dotenv = import("dotenv")
      .then((dotenv) => {
        dotenv.config();
      })
      .catch(() => console.log("Can only use dotenv in development mode"));
  }
};
