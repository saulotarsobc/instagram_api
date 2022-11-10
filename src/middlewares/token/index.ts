require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";

const { TOKEN } = process.env;

const teste = express();

teste.use((req: Request, res: Response, next: NextFunction) => {

    console.log(req.originalUrl);

    if (req.body.token != TOKEN) {
        res.status(401).send({
            msg: "token invalido!",
        });
    } else {
        next();
    }
});

export default teste;