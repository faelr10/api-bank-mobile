import { Profile } from '@prisma/client';

export type ICreateProfile = {
  name: string;
  email: string;
  password: string;
};

export interface ICreateProfileService {
  execute(params: ICreateProfile): Promise<Profile>;
}

export interface IProfileRepository {
  create(params: ICreateProfile): Promise<Profile>;
  exists(where: Partial<Profile>): Promise<Profile>;
}
