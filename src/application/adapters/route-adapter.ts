import { Request, Response } from 'express';

import {
  Controller,
  HttpRequest
} from '../../infrastructure/entry-points/api/interfaces';

export const AdaptRoute = (controler: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    };
    const httpResponse = await controler.handle(httpRequest);
    void res.status(httpResponse.statusCode).send(httpResponse.body);
  };
};
