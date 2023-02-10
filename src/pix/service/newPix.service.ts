import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/account/accountRepository/account.respository';
import { IAccountRepository } from 'src/account/structure/structure';
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
    @Inject(AccountRepository)
    private readonly accountRepository: IAccountRepository,
  ) {}
  async execute(params: INewPixParams): Promise<INewPixResponse> {
    const profileAuthenticated = await this.profileRepository.exists({
      id: params.profileId,
    });
    if (!profileAuthenticated)
      throw new ForbiddenException('User does not exists!');

    if (
      Number(profileAuthenticated.Account[0].balance) < Number(params.valuePix)
    ) {
      throw new ForbiddenException('Saldo insuficiente!');
    }

    const verifyProfilePix = await this.profileRepository.exists({
      keyPix: params.keyPix,
    });
    if (!verifyProfilePix) throw new ForbiddenException('KeyPix not found!');

    const newBalanceProfileAuthenticated =
      Number(profileAuthenticated.Account[0].balance) - Number(params.valuePix);

    const newBalanceProfilePix =
      Number(verifyProfilePix.Account[0].balance) + Number(params.valuePix);

    await this.accountRepository.update({
      id: verifyProfilePix.Account[0].id,
      balance: String(newBalanceProfilePix),
    });

    await this.accountRepository.update({
      id: profileAuthenticated.Account[0].id,
      balance: String(newBalanceProfileAuthenticated),
    });
    return { message: 'Pix is sucessfull' };
  }
}
