"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const app_1 = require("../config/app");
const locationSearchQueryRouter = app_1.fileRouter();
locationSearchQueryRouter.post("/", (request, response) => {
    const { searchQuery } = request.body;
    const geoQueryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${app_1.OPENWEATHER_API_ID}`;
    if (searchQuery) {
        axios_1.default
            .get(geoQueryUrl)
            .then((apiResponse) => {
            response.send(apiResponse.data);
        })
            .catch(({ errno, code, syscall, isAxiosError, protocol, host }) => response.send({ errno, code, syscall, isAxiosError, protocol, host }));
    }
});
exports.default = locationSearchQueryRouter;
//# sourceMappingURL=locationSearchQuery.js.map