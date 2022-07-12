import { UserRepository } from '../../../infrastructure/repositories/user.repository';
import { IUserService } from './user.implementation';

export class UserService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUser = () => {
    return this.userRepository.getUser();
  };
}
