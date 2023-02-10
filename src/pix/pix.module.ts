import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountRepository } from 'src/account/accountRepository/account.respository';
import { ProfileRepository } from 'src/profile/profile.repository';
import { PixController } from './pix.controller';
import { NewPixService } from './service/newPix.service';

@Module({
  controllers: [PixController],
  providers: [
    PrismaClient,
    NewPixService,
    ProfileRepository,
    AccountRepository,
  ],
})
export class PixModule {}
