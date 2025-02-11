import { Controller, Get, Param } from '@nestjs/common';
import { UserDomainService } from 'src/domain/services/UserDomainService';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserDomainService) {}

  @Get()
  async getUser(@Param('id') id: number) {
    return await this.userService.getUserById(id);
  }
}
