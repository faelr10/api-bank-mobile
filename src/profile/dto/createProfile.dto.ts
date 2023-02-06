import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ICreateProfile } from '../structure/structure';

export class CreateProfileDto implements ICreateProfile {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
