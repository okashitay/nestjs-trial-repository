import { IsNumberString, IsOptional } from "class-validator";

export class UsersDto {

  @IsOptional()
  @IsNumberString()
  limit: number;

}
