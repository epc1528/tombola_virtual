import { BaseRepository } from './base/base-repository';
import { UserSchema } from '../orm/mongo/schema/user.schema';

export class UserRepository extends BaseRepository<UserSchema> {
  constructor(collectionName: string) {
    super(collectionName);
  }
}
