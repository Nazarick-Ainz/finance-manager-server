import { User } from 'src/domain/models/User';
import { IUserRepository } from 'src/domain/ports/output/IUserRepository';

export class UserApplicationService {
  constructor(private readonly userRepository: IUserRepository) {}

  createUser(user: User): Promise<void> {
    return this.userRepository.save(user);
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}
