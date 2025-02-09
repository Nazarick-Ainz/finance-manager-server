import { User } from 'src/domain/models/User';

export interface IUserService {
  createUser(data: User): Promise<void>;
  getUserById(id: number): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
  updateUser(id: number, data: User): Promise<void>;
  deleteUser(id: number): Promise<void>;
}
