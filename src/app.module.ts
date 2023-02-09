import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PixModule } from './pix/pix.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ProfileModule, AuthModule, PixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
