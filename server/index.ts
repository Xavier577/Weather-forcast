import cors from "cors";
import { app, expressJsonParser, PORT } from "./config/app";
import forcastRouter from "./routes/forcast";
import locationSearchQueryRouter from "./routes/locationSearchQuery";

app.use(cors());
app.use(expressJsonParser());
app.use("/locationSearchQuery", locationSearchQueryRouter);
app.use("/forcast", forcastRouter);

app.get("/", (request, response) => {
  response.send("server is running....");
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
