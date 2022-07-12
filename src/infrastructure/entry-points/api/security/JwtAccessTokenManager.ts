import { HttpRequest, HttpResponse, Middleware } from '../interfaces';
import { IMiddlewareService } from '../../../../domain/services/middleware/middleware.implementation';
import { ok, serverError } from '../helpers/api-response';

export class JwtDecodeAccessTokenManager implements Middleware {
  constructor(private jwtKey: string, private readonly testService: IMiddlewareService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.decodeJwt(_httpRequest.headers.authorization, this.jwtKey) });
    } catch (error) {
      return serverError(error);
    }
  }
}

export class JwtEncodeAccessTokenManager implements Middleware {
  constructor(private payload:string, private jwtKey: string, private readonly testService: IMiddlewareService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: await this.testService.generateJwt(this.payload, this.jwtKey) });
    } catch (error) {
      return serverError(error);
    }
  }
}


