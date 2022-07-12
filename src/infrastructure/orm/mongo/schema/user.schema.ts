import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { TokenAccessSchema } from './tokenAccess.schema';

@Entity('user')
export class UserSchema {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  user: string;

  @Column()
  pass: string;

  @Column()
  credit: number;

  @Column((type) => TokenAccessSchema)
  token: TokenAccessSchema;
}
