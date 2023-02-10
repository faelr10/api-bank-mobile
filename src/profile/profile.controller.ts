import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Profile } from '@prisma/client';
import { CreateProfileDto } from './dto/createProfile.dto';
import { GetProfileDto } from './dto/getProfile.dto';
import { CreateProfile } from './service/CreateProfile.service';
import { GetProfileService } from './service/GetProfileById.service';
import { DeleteProfileService } from './service/IDeleteParams.service';
import {
  ICreateProfileService,
  IDeleteProfileService,
  IGetProfileService,
} from './structure/structure';

@Controller('profile')
export class ProfileController {
  constructor(
    @Inject(CreateProfile)
    private readonly createProfileService: ICreateProfileService,
    @Inject(GetProfileService)
    private readonly getProfileService: IGetProfileService,
    @Inject(DeleteProfileService)
    private readonly deleteProfileService: IDeleteProfileService,
  ) {}

  @Post()
  createPermissions(@Body() data: CreateProfileDto): Promise<Profile> {
    return this.createProfileService.execute(data);
  }

  @Get()
  getProfileById(@Query() params: GetProfileDto): Promise<any> {
    return this.getProfileService.execute(params);
  }

  @Delete(':id')
  deletePermission(@Param('id') id: string): Promise<void> {
    return this.deleteProfileService.execute({ id });
  }
}
