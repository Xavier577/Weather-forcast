"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const loadEnv = () => {
    if (process.env.NODE_ENV !== "production") {
        dotenv_1.default.config();
    }
};
exports.default = loadEnv;
//# sourceMappingURL=secrets..js.map