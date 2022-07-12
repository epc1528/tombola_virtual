export interface IMiddlewareService {
  decodeJwt: (jwt:string, jwtKey:string) => Promise<any>;

  generateJwt: (_httpRequest:string, jwtKey:string) => Promise<any>;
}