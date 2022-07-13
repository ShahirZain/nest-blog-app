import { isNotEmpty, MinLength, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @IsEmail()
  password: string;
}
