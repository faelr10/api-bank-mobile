import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { CreateProfile } from './service/CreateProfile.service';

@Module({
  controllers: [ProfileController],
  providers: [CreateProfile, ProfileRepository, PrismaClient],
})
export class ProfileModule {}
