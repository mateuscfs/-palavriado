import { Request, Response, Router } from 'express';

import { swaggerSpec } from '../swagger';
import { guessRoutes } from './guess';
import { dictionaryRoutes } from './dictionary';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Palavreado 1.0');
});

router.use('/api/dictionary', dictionaryRoutes);
router.use('/api/guess', guessRoutes);

router.get('/api-docs', (req: Request, res: Response) => {
    res.send(swaggerSpec);
});

export default router;
