import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountRepository } from 'src/account/repository/account.respository';
import { ProfileRepository } from 'src/profile/profile.repository';
import { QrCodeController } from './qrCode.controller';
import { PaymentQrCodeService } from './service/paymentQrCode.service';

@Module({
  controllers: [QrCodeController],
  providers: [
    AccountRepository,
    ProfileRepository,
    PaymentQrCodeService,
    PrismaClient,
  ],
})
export class QrCodeModule {}
