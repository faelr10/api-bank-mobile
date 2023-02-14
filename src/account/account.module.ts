import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountRepository } from './repository/account.respository';

@Module({
  providers: [AccountRepository, PrismaClient],
})
export class AccountModule {}
