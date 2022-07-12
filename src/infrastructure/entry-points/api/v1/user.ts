import { Request, Response, Router } from 'express';

export const routerUser = Router();

routerUser.get('/', (req: Request, res: Response) => {
  res.send('Hello Word');
});

routerUser.post('/miea', (req: Request, res: Response) => {
  res.send('Hello Words');
});
