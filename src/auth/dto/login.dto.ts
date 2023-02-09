import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ILoginParams } from '../structure/structure';

export class LoginDto implements ILoginParams {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
