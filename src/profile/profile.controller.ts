import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { CreateProfileDto } from './dto/createProfile.dto';
import { CreateProfile } from './service/CreateProfile.service';
import { GetProfileByIdService } from './service/GetProfileById.service';
import { GetProfileByKeyService } from './service/getProfileByKeyPix.service';
import {
  ICreateProfileService,
  IGetProfileByIdService,
} from './structure/structure';

@Controller('profile')
export class ProfileController {
  constructor(
    @Inject(CreateProfile)
    private readonly createProfileService: ICreateProfileService,
    @Inject(GetProfileByIdService)
    private readonly getProfileByIdService: IGetProfileByIdService,
    private readonly getProfileByKeyPixService: GetProfileByKeyService,
  ) {}

  @Post()
  createPermissions(@Body() data: CreateProfileDto): Promise<Profile> {
    return this.createProfileService.execute(data);
  }

  @Get(':id')
  getProfileById(@Param('id') id: string): Promise<any> {
    return this.getProfileByIdService.execute({ id });
  }

  @Get('keyPix/:id')
  getProfileByKeyPix(@Param('id') id: string): Promise<any> {
    return this.getProfileByKeyPixService.execute({ id });
  }
}
