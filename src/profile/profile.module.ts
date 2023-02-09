import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { CreateProfile } from './service/CreateProfile.service';
import { GetProfileByIdService } from './service/GetProfileById.service';
import { GetProfileByKeyService } from './service/getProfileByKeyPix.service';

@Module({
  controllers: [ProfileController],
  providers: [
    CreateProfile,
    GetProfileByIdService,
    ProfileRepository,
    GetProfileByKeyService,
    PrismaClient,
  ],
})
export class ProfileModule {}
