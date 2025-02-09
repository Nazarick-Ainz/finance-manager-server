import { User } from '../models/User';

export class UserBuilder {
  private readonly user: User;

  constructor() {
    this.user = new User();
  }

  setName(name: string): this {
    this.user.name = name;
    return this;
  }

  setEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  setPassword(password: string): this {
    this.user.password = password;
    return this;
  }

  setCreatedAt(createdAt: Date): this {
    this.user.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date): this {
    this.user.updatedAt = updatedAt;
    return this;
  }

  buildWithDates(): User {
    const now = new Date();
    this.user.createdAt = now;
    this.user.updatedAt = now;
    return this.user;
  }

  build(): User {
    return this.user;
  }
}
