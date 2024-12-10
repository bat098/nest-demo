import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['INTER', 'ENGINNER', 'ADMIN'], {
    message: 'Valid role eqquired',
  })
  role: 'INTER' | 'ENGINNER' | 'ADMIN';
}
