"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveStatic = exports.PORT = exports.OPENWEATHER_API_ID = exports.fileRouter = exports.expressJsonParser = exports.bodyParser = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const secrets_1 = __importDefault(require("./secrets."));
secrets_1.default();
exports.app = express_1.default();
exports.bodyParser = express_1.default.urlencoded;
exports.expressJsonParser = express_1.default.json;
exports.fileRouter = express_1.default.Router;
exports.OPENWEATHER_API_ID = process.env.OPENWEATHER_API_ID;
exports.PORT = process.env.PORT || 8080;
exports.serveStatic = express_1.default.static;
//# sourceMappingURL=app.js.map