import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { MasterDBConnection } from '../../../../../infrastructure/mysql/master-connection';
import { UsersDto } from '../../dtos/users/users';
import { IUserEntity, UserEntity } from '../../entities/users/user.entity';
import { IUsersRepository } from '../../interfaces/users/users-repository.interface';

@Injectable()
export class UsersRepository implements IUsersRepository {

  private manager: EntityManager;
  constructor() {}

  async findUsers(params: UsersDto): Promise<IUserEntity[]> {
    try {
      const limit: number = params.limit ? Number(params.limit) : 10;

      this.manager = (await MasterDBConnection.getManager());
      const users: unknown[] = await this.manager.transaction(manager => {
        return manager.query(`SELECT
          id,
          name
          FROM
          users limit ?;`, [limit]);
      });
      await MasterDBConnection.close();

      const user = new UserEntity();
      return users.map(u => user.buildEntity(u));

    } catch (error) {
      await MasterDBConnection.close();
      throw new InternalServerErrorException(
        error,
        'Exception error',
      );
    }
  }
}
