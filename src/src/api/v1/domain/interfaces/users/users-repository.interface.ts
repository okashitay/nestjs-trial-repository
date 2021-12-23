import { Injectable } from '@nestjs/common';
import { UsersDto } from '../../dtos/users/users';
import { IUserEntity } from '../../entities/users/user.entity';

@Injectable()
export abstract class IUsersRepository {
  abstract findUsers(params: UsersDto): Promise<IUserEntity[]>;
}
