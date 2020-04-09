import {Request, Response} from 'express';

const routes = require('express').Router();

routes.get("/", (req: Request, res: Response)=>{
    return res.json("hello World");
})

module.exports = routes;