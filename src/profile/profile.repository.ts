import { Injectable } from '@nestjs/common';
import { PrismaClient, Profile } from '@prisma/client';
import { ICreateProfile, IProfileRepository } from './structure/structure';

@Injectable()
export class ProfileRepository implements IProfileRepository {
  constructor(private readonly prisma: PrismaClient) {}

  create(params: ICreateProfile): Promise<Profile> {
    return this.prisma.profile.create({
      data: {
        email: params.email,
        name: params.name,
        passwordHash: params.password,
      },
    });
  }

  exists(where: Partial<Profile>): Promise<Profile> {
    return this.prisma.profile.findFirst({
      where,
    });
  }
}
