import express, { Request, Response } from "express";

const teste = express();

teste.post("/", (req: Request, res: Response) => {
    res.send({
        msg: "teste ok :)",
    });
});

export default teste;
