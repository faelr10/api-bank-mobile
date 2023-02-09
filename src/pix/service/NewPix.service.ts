import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ProfileRepository } from 'src/profile/profile.repository';
import { IProfileRepository } from 'src/profile/structure/structure';
import {
  INewPixParams,
  INewPixResponse,
  INewPixService,
} from '../structure/structure';

@Injectable()
export class NewPixService implements INewPixService {
  constructor(
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}
  async execute(params: INewPixParams): Promise<INewPixResponse> {
    const verifyProfileLogged = await this.profileRepository.exists({
      id: params.profileId,
    });
    if (!verifyProfileLogged)
      throw new ForbiddenException('User does not exists!');

    if (
      Number(verifyProfileLogged.Account[0].balance) < Number(params.valuePix)
    ) {
      throw new ForbiddenException('Saldo insuficiente!');
    }

    const verifyProfilePix = await this.profileRepository.exists({
      keyPix: params.keyPix,
    });
    if (!verifyProfilePix) throw new ForbiddenException('KeyPix not found!');

    await this.profileRepository.update({
      id: verifyProfilePix.Account[0].id,
      balance: String(
        Number(verifyProfileLogged.Account[0].balance) +
          Number(params.valuePix),
      ),
    });

    await this.profileRepository.update({
      id: verifyProfileLogged.Account[0].id,
      balance: String(
        Number(verifyProfileLogged.Account[0].balance) -
          Number(params.valuePix),
      ),
    });
    return { message: 'Pix is sucessfull' };
  }
}
