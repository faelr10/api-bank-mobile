import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PaymentQrCodeDto } from './dto/paymentQrCode.dto';
import { PaymentQrCodeService } from './service/paymentQrCode.service';
import { IPaymentQrCode, IPaymentQrCodeResponse } from './structure/structure';

@Controller('qrCode')
export class QrCodeController {
  constructor(
    @Inject(PaymentQrCodeService)
    private readonly paymentQrCodeService: IPaymentQrCode,
  ) {}

  @Post()
  paymentQrCode(
    @Body() data: PaymentQrCodeDto,
  ): Promise<IPaymentQrCodeResponse> {
    return this.paymentQrCodeService.execute(data);
  }
}
