require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import test from "./routes/test";
import token from "./middlewares/token"

const { PORT } = process.env;

const server = express();
server.use(bodyParser.json());

server.use(token);
server.use('/test', test);

server.listen(PORT, () => {
    console.log(`server running... port: ${PORT}`);
});
