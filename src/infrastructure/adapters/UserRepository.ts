import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/models/User';
import { IUserRepository } from 'src/domain/ports/output/IUserRepository';
import { BaseRepository } from './BaseRepository';

@Injectable()
export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(em: EntityManager) {
    super(em, User);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.em.findOne(User, { email });
  }
}
