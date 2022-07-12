import { Application } from 'express';
import { bodyParser, bodyUrlEncoded, cors } from '../middlewares';

export default (app: Application): void => {
  app.use(cors);
  app.use(bodyParser);
  app.use(bodyUrlEncoded);
};
