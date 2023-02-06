import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { ProfileRepository } from '../profile.repository';
import {
  ICreateProfile,
  ICreateProfileService,
  IProfileRepository,
} from '../structure/structure';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateProfile implements ICreateProfileService {
  constructor(
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}
  async execute(params: ICreateProfile): Promise<Profile> {
    const verifyProfile = await this.profileRepository.exists({
      email: params.email,
    });
    if (verifyProfile) throw new ForbiddenException('Email already register!');

    params.password = await bcrypt.hash(params.password, 10);
    const newProfile = await this.profileRepository.create(params);
    delete newProfile.passwordHash;
    return newProfile;
  }
}
