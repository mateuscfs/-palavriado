import { Request, Response, Router } from 'express';

import { swaggerSpec } from '../swagger';
import { dictionaryRoutes } from './dictionary';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Palavreado 1.0');
});

router.use('/api/dictionary', dictionaryRoutes);

router.get('/api-docs', (req: Request, res: Response) => {
    res.send(swaggerSpec);
});

export default router;
