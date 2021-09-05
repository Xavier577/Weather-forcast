//@ts-ignore
import dotenv from "dotenv";

export const load_env = () => {
  if (process.env.NODE_ENV !== "production") {
    dotenv.config();
    return;
  }
};
