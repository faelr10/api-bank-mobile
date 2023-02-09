import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProfileRepository } from 'src/profile/profile.repository';
import { PixController } from './pix.controller';
import { NewPixService } from './service/NewPix.service';

@Module({
  controllers: [PixController],
  providers: [PrismaClient, NewPixService, ProfileRepository],
})
export class PixModule {}
