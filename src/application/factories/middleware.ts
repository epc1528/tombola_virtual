import { MiddlewareService } from '../../domain/services';
import { JwtDecodeAccessTokenManager } from '../../infrastructure/entry-points/api/security/JwtAccessTokenManager';
import { keyJwt } from '../config/environment';


export class middlewareController {
  deodeJwt(): JwtDecodeAccessTokenManager {
    const middlewareService = new MiddlewareService();
    const middlewareController = new JwtDecodeAccessTokenManager(keyJwt,middlewareService);
    return middlewareController;
  }
}
