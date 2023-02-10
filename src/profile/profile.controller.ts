import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { CreateProfileDto } from './dto/createProfile.dto';
import { GetProfileDto } from './dto/getProfile.dto';
import { CreateProfile } from './service/CreateProfile.service';
import { GetProfileService } from './service/GetProfileById.service';
import {
  ICreateProfileService,
  IGetProfileService,
} from './structure/structure';

@Controller('profile')
export class ProfileController {
  constructor(
    @Inject(CreateProfile)
    private readonly createProfileService: ICreateProfileService,
    @Inject(GetProfileService)
    private readonly getProfileService: IGetProfileService,
  ) {}

  @Post()
  createPermissions(@Body() data: CreateProfileDto): Promise<Profile> {
    return this.createProfileService.execute(data);
  }

  @Get()
  getProfileById(@Query() params: GetProfileDto): Promise<any> {
    return this.getProfileService.execute(params);
  }
}
