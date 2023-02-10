import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ProfileRepository } from '../profile.repository';
import {
  IDeleteParams,
  IDeleteProfileService,
  IProfileRepository,
} from '../structure/structure';

@Injectable()
export class DeleteProfileService implements IDeleteProfileService {
  constructor(
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}
  async execute(params: IDeleteParams): Promise<void> {
    const verifyProfile = await this.profileRepository.exists({
      id: params.id,
    });
    if (!verifyProfile) throw new ForbiddenException('User not found!');
    await this.profileRepository.delete(params);
    return;
  }
}
