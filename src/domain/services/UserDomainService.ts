import { User } from '../models/User';
import { IUserService } from '../ports/input/IUserService';
import { IUserRepository } from '../ports/output/IUserRepository';

export class UserDomainService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  createUser(user: User): Promise<void> {
    return this.userRepository.save(user);
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  updateUser(id: number, data: User): Promise<void> {
    return this.userRepository.update(id, data);
  }

  deleteUser(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
