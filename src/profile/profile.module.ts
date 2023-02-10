import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountRepository } from 'src/account/repository/account.respository';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { CreateProfile } from './service/CreateProfile.service';
import { GetProfileService } from './service/GetProfileById.service';
import { DeleteProfileService } from './service/IDeleteParams.service';

@Module({
  controllers: [ProfileController],
  providers: [
    CreateProfile,
    GetProfileService,
    DeleteProfileService,
    ProfileRepository,
    AccountRepository,
    PrismaClient,
  ],
})
export class ProfileModule {}
