import { EntityData, FilterQuery } from '@mikro-orm/core';
//Basic operations for any entity
export interface IBaseRepository<T> {
  findById(id: number): Promise<T | null>;
  findAll(filter?: FilterQuery<T>): Promise<T[]>;
  save(entity: T): Promise<void>;
  delete(id: number): Promise<void>;
  update(id: number, data: EntityData<T>): Promise<void>;
}
