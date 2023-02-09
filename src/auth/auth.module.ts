import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProfileRepository } from 'src/profile/profile.repository';
import { AuthController } from './auth.controller';
import { LoginService } from './service/login.service';

@Module({
  controllers: [AuthController],
  providers: [LoginService, ProfileRepository, PrismaClient],
})
export class AuthModule {}
