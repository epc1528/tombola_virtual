import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('token')
export class TokenAccessSchema {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  token: string;
}
