"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const { TOKEN } = process.env;
const teste = (0, express_1.default)();
teste.use((req, res, next) => {
    console.log(req.originalUrl);
    if (req.body.token != TOKEN) {
        res.status(401).send({
            msg: "token invalido!",
        });
    }
    else {
        next();
    }
});
exports.default = teste;
