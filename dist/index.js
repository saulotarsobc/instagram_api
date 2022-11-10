"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const test_1 = __importDefault(require("./routes/test"));
const token_1 = __importDefault(require("./middlewares/token"));
const { PORT } = process.env;
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(token_1.default);
server.use('/test', test_1.default);
server.listen(PORT, () => {
    console.log(`server running... port: ${PORT}`);
});
