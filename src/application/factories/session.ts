import { UserService } from '../../domain/services';
import { JwtAccessTokenManager } from '../../infrastructure/entry-points/api/security/JwtAccessTokenManager';

import { keyJwt } from '../config/environment';

const makeSessionService = () => {
  const jwt = new JwtAccessTokenManager(keyJwt);
  // return new SessionService(sessionRepository, userService, token.expiresIn);
};
