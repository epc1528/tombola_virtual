import { BaseRepository } from './base/base-repository';
import {TombolaSchema} from '../orm/mongo/schema/tombolaConfig.schema'

export class TombolaRepository extends BaseRepository<TombolaSchema> {
  constructor(collectionName: string) {
    super(collectionName);
  }
}
