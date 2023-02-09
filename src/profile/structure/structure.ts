import { Account, Profile } from '@prisma/client';

export type ICreateProfile = {
  name: string;
  email: string;
  password: string;
};

export type IGetProfileByIdParams = {
  id: string;
};

export type IUpdateAccountParams = {
  id: string;
  balance: string;
};

export interface ICreateProfileService {
  execute(params: ICreateProfile): Promise<Profile>;
}
export interface IGetProfileByIdService {
  execute(params: IGetProfileByIdParams): Promise<any>;
}

export interface IProfileRepository {
  create(params: ICreateProfile): Promise<Profile>;
  exists(where: Partial<Profile> | any, select?: object): Promise<any>;
  update(params: IUpdateAccountParams): Promise<Account>;
}
