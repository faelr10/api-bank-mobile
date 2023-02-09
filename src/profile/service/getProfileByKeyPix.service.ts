import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ProfileRepository } from '../profile.repository';
import {
  IGetProfileByIdParams,
  IGetProfileByIdService,
  IProfileRepository,
} from '../structure/structure';

@Injectable()
export class GetProfileByKeyService implements IGetProfileByIdService {
  constructor(
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}
  async execute(params: IGetProfileByIdParams): Promise<any> {
    const verifyProfile = await this.profileRepository.exists({
      keyPix: params.id,
    });
    if (!verifyProfile) throw new ForbiddenException('Profile not found');

    return verifyProfile;
  }
}
