import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ProfileRepository } from 'src/profile/profile.repository';
import { IProfileRepository } from 'src/profile/structure/structure';
import {
  ILoginParams,
  ILoginResponse,
  ILoginService,
} from '../structure/structure';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as base64 from 'base-64';

@Injectable()
export class LoginService implements ILoginService {
  constructor(
    @Inject(ProfileRepository)
    private readonly profileRepository: IProfileRepository,
  ) {}

  async execute(params: ILoginParams): Promise<ILoginResponse> {
    const verifyProfile = await this.profileRepository.exists({
      email: params.email,
    });
    if (!verifyProfile) throw new ForbiddenException('Profile not found!');
    const verifyPassword = await bcrypt.compare(
      params.password,
      verifyProfile.passwordHash,
    );
    if (!verifyPassword)
      throw new ForbiddenException('Email or Password invalid!');

    const privatekey = base64.decode(process.env.SECRET_PRIV_KEY);
    const token = jwt.sign(
      {
        id: verifyProfile.id,
      },
      privatekey,
      {
        expiresIn: '1h',
        algorithm: 'RS256',
      },
    );
    return { token, id: verifyProfile.id };
  }
}
