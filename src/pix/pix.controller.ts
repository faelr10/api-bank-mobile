import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { NewPixDto } from './dto/newPix.dto';
import { NewPixService } from './service/newPix.service';
import { INewPixResponse, INewPixService } from './structure/structure';

@Controller('pix')
export class PixController {
  constructor(
    @Inject(NewPixService)
    private readonly newPixService: INewPixService,
  ) {}

  @Post(':id')
  newPix(
    @Body() data: NewPixDto,
    @Param('id') id: string,
  ): Promise<INewPixResponse> {
    return this.newPixService.execute({
      keyPix: data.keyPix,
      profileId: id,
      valuePix: data.valuePix,
    });
  }
}
