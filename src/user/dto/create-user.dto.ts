import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @MinLength(6)
  password: string

  @IsEnum(Role)
  @IsOptional()
  role?: Role
}

export type UpdateUserDto = Partial<CreateUserDto>