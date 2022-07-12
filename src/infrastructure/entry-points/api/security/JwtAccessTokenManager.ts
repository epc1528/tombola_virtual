import { JwtI } from '../../../interfaces/jwt-token';

import jwt from 'jsonwebtoken';

export class JwtAccessTokenManager implements JwtI {
  constructor(private readonly jwtKey: string) {}

  generate(payload: object) {
    return jwt.sign(payload, this.jwtKey);
  }

  decode(accessToken: string) {
    return jwt.verify(accessToken, this.jwtKey);
  }
}
