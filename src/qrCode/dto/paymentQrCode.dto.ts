import { IsNotEmpty, IsString } from 'class-validator';
import { IPaymentQrCodeParams } from '../structure/structure';

export class PaymentQrCodeDto implements IPaymentQrCodeParams {
  @IsString()
  @IsNotEmpty()
  idUserLogged: string;

  @IsString()
  @IsNotEmpty()
  idUserQrCode: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
