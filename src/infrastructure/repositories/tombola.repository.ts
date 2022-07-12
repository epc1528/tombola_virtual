import { TombolaSchema } from '../orm/mongo/schema/tombolaConfig.schema';
import { BaseRepository } from './base/base-repository';

interface Tombola {
  name: string;
}

export class TombolaRepository extends BaseRepository<Tombola> {
  constructor() {
    super('tombola');
  }
}
