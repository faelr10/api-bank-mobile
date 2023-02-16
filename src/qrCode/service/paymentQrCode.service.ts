import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/account/repository/account.respository';
import { IAccountRepository } from 'src/account/structure/structure';
import { ProfileRepository } from 'src/profile/profile.repository';
import { IProfileRepository } from 'src/profile/structure/structure';
import {
  IPaymentQrCode,
  IPaymentQrCodeParams,
  IPaymentQrCodeResponse,
} from '../structure/structure';

@Injectable()
export class PaymentQrCodeService implements IPaymentQrCode {
  constructor(
    @Inject(AccountRepository)
    private readonly accountRepository: IAccountRepository,
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}
  async execute(params: IPaymentQrCodeParams): Promise<IPaymentQrCodeResponse> {
    const verifyProfileLogged = await this.profileRepository.exists({
      id: params.idUserLogged,
    });
    if (!verifyProfileLogged)
      throw new ForbiddenException('User Logged does not exists!');

    const verifyProfileQrCode = await this.profileRepository.exists({
      id: params.idUserQrCode,
    });
    if (!verifyProfileQrCode)
      throw new ForbiddenException('User Qrcode does not exists!');

    const newBalanceProfileLogged = String(
      Number(verifyProfileLogged.Account[0].balance) - Number(params.value),
    );
    await this.accountRepository.update({
      id: verifyProfileLogged.Account[0].id,
      balance: newBalanceProfileLogged,
    });

    const newBalanceProfileQrCode = String(
      Number(verifyProfileQrCode.Account[0].balance) + Number(params.value),
    );
    await this.accountRepository.update({
      id: verifyProfileQrCode.Account[0].id,
      balance: newBalanceProfileQrCode,
    });

    return { message: 'Paymente QrCode is successful' };
  }
}
