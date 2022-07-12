import { Router } from 'express';
import { AdaptRoute } from '../../../../application/adapters/route-adapter';
import { userController } from '../../../../application/factories/user';
export const routerUser = Router();

const user = new userController();

routerUser.post('/login/', AdaptRoute(user.getUser()));

routerUser.post('/',AdaptRoute(user.saveUser()));

routerUser.put('/', AdaptRoute(user.updateUser()));
