/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

import dotenv from "dotenv";

const loadEnv = () => {
  if (process.env.NODE_ENV !== "production") {
    dotenv.config();
  }
};

export default loadEnv;
