import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { ProfileRepository } from '../profile.repository';
import {
  IGetProfileParams,
  IGetProfileService,
  IProfileRepository,
} from '../structure/structure';

@Injectable()
export class GetProfileService implements IGetProfileService {
  constructor(
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}

  async execute(params: IGetProfileParams): Promise<Profile> {
    if (!params.field || !params.value) {
      throw new ForbiddenException('Invalid params');
    }

    let profile: Profile;
    if (params.field === 'id') {
      profile = await this.profileRepository.exists({
        id: params.value,
      });
    } else if (params.field === 'keyPix') {
      profile = await this.profileRepository.exists({
        keyPix: params.value,
      });
    } else {
      throw new ForbiddenException(`Invalid field: ${params.field}`);
    }

    if (!profile) {
      throw new ForbiddenException('Profile not found');
    }

    return profile;
  }
}
