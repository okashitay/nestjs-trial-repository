import { Injectable } from '@nestjs/common';
import { UsersDto } from '../domain/dtos/users/users';
import { IUserEntity } from '../domain/entities/users/user.entity';
import { IUsersRepository } from '../domain/interfaces/users/users-repository.interface';


@Injectable()
export class UsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async getFindUsers(params: UsersDto): Promise<IUserEntity[]> {  
    const createUser: Promise<IUserEntity[]> = this.usersRepository.findUsers(params);   
    return createUser;
  }
}
