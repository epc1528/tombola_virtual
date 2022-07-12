import { UserService } from '../../domain/services';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import {
  UserController,
  UserSaveController,
  UserUpdateController
} from '../../infrastructure/entry-points/api/v1/user/user.controller';

export class userController {
  getUser(): UserController {
    const userRepository = new UserRepository('user');
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    return userController;
  }

  saveUser(): UserSaveController {
    const userRepository = new UserRepository('user');
    const userService = new UserService(userRepository);
    const userController = new UserSaveController(userService);
    return userController;
  }

  updateUser(): UserUpdateController {
    const userRepository = new UserRepository('user');
    const userService = new UserService(userRepository);
    const userController = new UserUpdateController(userService);
    return userController;
  }
}