import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('tombola')
export class TombolaSchema {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  awards: Object[];
}
