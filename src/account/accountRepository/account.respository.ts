import { Injectable } from '@nestjs/common';
import { Account, PrismaClient } from '@prisma/client';
import {
  IAccountRepository,
  ICreateAccountParams,
  IUpdateAccountParams,
} from '../structure/structure';

@Injectable()
export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaClient) {}

  createAccount(params: ICreateAccountParams): Promise<Account> {
    return this.prisma.account.create({
      data: params,
    });
  }

  update(params: IUpdateAccountParams): Promise<Account> {
    return this.prisma.account.update({
      where: {
        id: params.id,
      },
      data: {
        balance: params.balance,
      },
    });
  }
}
