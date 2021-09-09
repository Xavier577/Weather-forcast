import axios from "axios";
import { fileRouter } from "../config/app";

const userCoordsRouter = fileRouter();

userCoordsRouter.post("/", (request, response) => {
  //  console.log(request.body);
  response.send(request.body);
});

export default userCoordsRouter;
