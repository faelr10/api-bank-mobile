import { Profile } from '@prisma/client';

export type ICreateProfile = {
  name: string;
  email: string;
  password: string;
};

export type IGetProfileParams = {
  field: string;
  value: string;
};

export interface ICreateProfileService {
  execute(params: ICreateProfile): Promise<Profile>;
}
export interface IGetProfileService {
  execute(params: IGetProfileParams): Promise<any>;
}

export interface IProfileRepository {
  create(params: ICreateProfile): Promise<Profile>;
  exists(where: Partial<Profile> | any, select?: object): Promise<any>;
}
