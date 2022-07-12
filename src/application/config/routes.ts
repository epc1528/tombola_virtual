import { Application, Request, Response } from 'express';
import { routerTombola } from '../../infrastructure/entry-points/api/v1/tambola';
import { routerUser } from '../../infrastructure/entry-points/api/v1/user';

export default (app: Application): void => {
  app.get('/status', (_req: Request, res: Response) => {
    res.status(200).end();
  });

  app.use('/user', routerUser);
  app.use('/tombola', routerTombola);
};
