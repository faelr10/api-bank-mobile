import { Account } from '@prisma/client';

export type ICreateAccountParams = {
  balance: string;
  profile_id: string;
};

export type IUpdateAccountParams = {
  id: string;
  balance: string;
};

export interface IAccountRepository {
  createAccount(params: ICreateAccountParams): Promise<Account>;
  update(params: IUpdateAccountParams): Promise<Account>;
}
