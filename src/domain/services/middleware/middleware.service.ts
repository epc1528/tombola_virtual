import { IMiddlewareService } from './middleware.implementation';
import Jwt from 'jsonwebtoken';

export class MiddlewareService implements IMiddlewareService {
  constructor() {}

  async generateJwt(payload: string, jwtKey:string) {
    return await Jwt.sign(payload, jwtKey);
  }
  
  async decodeJwt(accessToken: string, jwtKey:string) {
    return await Jwt.verify(accessToken,jwtKey);
  }
}
