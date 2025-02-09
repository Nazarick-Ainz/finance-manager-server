import { Injectable } from '@nestjs/common';
import { EntityData, EntityManager, FilterQuery } from '@mikro-orm/core';
import { IBaseRepository } from 'src/domain/ports/output/IBaseRepository';

@Injectable()
export abstract class BaseRepository<T extends object>
  implements IBaseRepository<T>
{
  constructor(
    protected readonly em: EntityManager,
    private readonly entityClass: new () => T,
  ) {}

  async findById(id: number): Promise<T | null> {
    return this.em.findOne(this.entityClass, { id } as FilterQuery<T>);
  }

  async findAll(filter?: FilterQuery<T>): Promise<T[]> {
    return this.em.find(this.entityClass, filter || {});
  }

  async save(entity: T): Promise<void> {
    await this.em.persist(entity).flush();
  }

  async delete(id: number): Promise<void> {
    await this.em.nativeDelete(this.entityClass, { id } as FilterQuery<T>);
  }

  async update(id: number, data: EntityData<T>): Promise<void> {
    await this.em.nativeUpdate(
      this.entityClass,
      { id } as FilterQuery<T>,
      data,
    );
  }
}
