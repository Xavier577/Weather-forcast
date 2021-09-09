import cors from "cors";
import path from "path";
import { app, expressJsonParser, PORT, serveStatic } from "./config/app";
import forcastRouter from "./routes/forcast";
import locationSearchQueryRouter from "./routes/locationSearchQuery";
import userCoordsRouter from "./routes/usercoordsRoute";

app.use(cors());
app.use(expressJsonParser());
app.use(serveStatic(path.resolve(__dirname, "..", "client", "public")));
app.use("/usercoords", userCoordsRouter);
app.use("/locationSearchQuery", locationSearchQueryRouter);
app.use("/forcast", forcastRouter);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
