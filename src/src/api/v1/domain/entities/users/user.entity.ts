interface EntityData {
  id: number;
  name: string;
}

export interface IUserEntity extends EntityData {}

import { InternalServerErrorException } from '@nestjs/common';

export class UserEntity {

  constructor() {
  }

  buildEntity(object: unknown): EntityData {
    if (!this.isEntity(object)) {
      throw new InternalServerErrorException(
        object,
        'fetched data type is invalid',
      );
    }

    return {
      id: object.id,
      name: object.name,
    };
  }

  isEntity(value: unknown): value is IUserEntity {
    return (typeof value === 'object' &&
      typeof (value as IUserEntity).id === 'number' &&
      typeof (value as IUserEntity).name === 'string'
    );
  }
}
