import { Router, Request, Response } from "express";
import { createDictionary } from "../controllers/dictionary";

const routes = Router();

routes.post('/', async (req: Request, res: Response) => {
    const body = req.body.data;

    const response = await createDictionary(body);

    return res.status(201).json(response);
})

export const dictionaryRoutes: Router = routes;