"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const app_1 = require("../config/app");
const forcastRouter = app_1.fileRouter();
forcastRouter.post("/", (request, response) => {
    const { latitude, longitude } = request.body;
    if (longitude && latitude) {
        const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${app_1.OPENWEATHER_API_ID}`;
        axios_1.default
            .get(queryUrl)
            .then((apiResponse) => response.send(apiResponse.data))
            .catch(({ errno, code, syscall, isAxiosError, protocol, host }) => response.send({ errno, code, syscall, isAxiosError, protocol, host }));
    }
});
exports.default = forcastRouter;
//# sourceMappingURL=forcast.js.map