import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class UserEntity {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  password: string;

  @Property('created_at')
  createdAt: Date;

  @Property('updated_at')
  updatedAt: Date;
}
