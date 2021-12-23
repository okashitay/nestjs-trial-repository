import { Controller, Get, Query } from '@nestjs/common';
import { UsersDto } from '../domain/dtos/users/users';
import { UsersService } from '../services/users.service';

@Controller('api/v1')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/users')
    async getFindUsers(@Query() params: UsersDto) {
      return {
        users: await this.usersService.getFindUsers(params),
      };
    }
}
