import { IsNotEmpty, IsString } from 'class-validator';

export class NewPixDto {
  @IsString()
  @IsNotEmpty()
  keyPix: string;

  @IsString()
  @IsNotEmpty()
  valuePix: string;
}
