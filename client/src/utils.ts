import axios from "axios";

export const sendToServer = <T>(route: string, data: T) => {
  axios.post(route, data);
};
