"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const app_1 = require("./config/app");
const forcast_1 = __importDefault(require("./routes/forcast"));
const locationSearchQuery_1 = __importDefault(require("./routes/locationSearchQuery"));
app_1.app.use(cors_1.default());
app_1.app.use(app_1.expressJsonParser());
app_1.app.use("/locationSearchQuery", locationSearchQuery_1.default);
app_1.app.use("/forcast", forcast_1.default);
app_1.app.get("/", (request, response) => {
    response.send("server is running....");
});
app_1.app.listen(app_1.PORT, () => console.log(`server is running on port ${app_1.PORT}`));
//# sourceMappingURL=index.js.map