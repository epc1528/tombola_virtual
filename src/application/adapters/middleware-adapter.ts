import { NextFunction, Request, Response } from 'express';

import {
    Middleware,
    HttpRequest
} from '../../infrastructure/entry-points/api/interfaces';

export const AdaptMiddleware = (middleware: Middleware) => {
    return async (req: Request, res: Response, next:NextFunction) => {
        const httpRequest: HttpRequest = {
            headers: req.headers
        };
        const httpResponse = await middleware.handle(httpRequest);
        next()
        void res.status(httpResponse.statusCode).send(httpResponse.body);
    };
};