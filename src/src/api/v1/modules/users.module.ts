import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { IUsersRepository } from '../domain/interfaces/users/users-repository.interface';
import { UsersRepository } from '../domain/repositories/users/users-repository';
import { UsersService } from '../services/users.service';

@Module({
  providers: [UsersService, { provide: IUsersRepository, useClass: UsersRepository }],
  controllers: [UsersController],
  exports: [UsersModule],
})
export class UsersModule {}
