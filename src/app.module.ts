import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PixModule } from './pix/pix.module';
import { ProfileModule } from './profile/profile.module';
import { QrCodeModule } from './qrCode/qrCode.module';

@Module({
  imports: [ProfileModule, QrCodeModule, AuthModule, PixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
