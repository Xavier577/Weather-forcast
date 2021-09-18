import express from "express";
import loadEnv from "./secrets.";

loadEnv();

export const app = express();
export const bodyParser = express.urlencoded;
export const expressJsonParser = express.json;
export const fileRouter = express.Router;
export const { OPENWEATHER_API_ID } = process.env;
export const PORT = process.env.PORT || 3000;
export const serveStatic = express.static;
