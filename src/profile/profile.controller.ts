import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { CreateProfileDto } from './dto/createProfile.dto';
import { CreateProfile } from './service/CreateProfile.service';
import { ICreateProfileService } from './structure/structure';

@Controller('profile')
export class ProfileController {
  constructor(
    @Inject(CreateProfile)
    private readonly createProfile: ICreateProfileService,
  ) {}

  @Post()
  createPermissions(@Body() data: CreateProfileDto): Promise<Profile> {
    return this.createProfile.execute(data);
  }
}
