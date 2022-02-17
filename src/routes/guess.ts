import { Request, Response, Router } from 'express';
import { getValidData } from '../utils/validators/handlers';

const routes = Router();

routes.post(
    '/',
    // validator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const result = await checkCorrectDailyWord(body);

        return res.status(200).json(result);
    },
);

export const guessRoutes: Router = routes;
