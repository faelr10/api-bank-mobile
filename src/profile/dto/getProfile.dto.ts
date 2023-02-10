import { IsString } from 'class-validator';

export class GetProfileDto {
  @IsString()
  field: string;

  @IsString()
  value: string;
}
