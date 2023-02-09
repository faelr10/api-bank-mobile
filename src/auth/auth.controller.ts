import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './service/login.service';
import { ILoginResponse, ILoginService } from './structure/structure';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(LoginService)
    private readonly loginService: ILoginService,
  ) {}

  @Post('login')
  createPermissions(@Body() data: LoginDto): Promise<ILoginResponse> {
    return this.loginService.execute(data);
  }
}
