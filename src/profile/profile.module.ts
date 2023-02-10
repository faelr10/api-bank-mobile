import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountRepository } from 'src/account/accountRepository/account.respository';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { CreateProfile } from './service/CreateProfile.service';
import { GetProfileService } from './service/GetProfileById.service';

@Module({
  controllers: [ProfileController],
  providers: [
    CreateProfile,
    GetProfileService,
    ProfileRepository,
    AccountRepository,
    PrismaClient,
  ],
})
export class ProfileModule {}
