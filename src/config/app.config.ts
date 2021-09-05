import express from "express";
import { load_env } from "./secrets.config";

load_env();

export const app = express();
export const serveStatic = express.static;
export const bodyParser = express.urlencoded;
export const expressJsonParser = express.json;
export const PORT = process.env.PORT || 3000;
export const OPENWEATHER_API_ID = process.env.OPENWEATHER_API_ID;
