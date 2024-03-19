import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BasicTokenGuard } from './guard/basic-token.guard';
import { RefreshTokenGuard } from './guard/bearer-token.guard';
import { RegisterUserDto } from './dto/register-user.dto';
import { IsPublic } from 'src/common/decorator/is-public.decorator';
import { IsPublicEnum } from 'src/common/const/is-public.const';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic(IsPublicEnum.ISREFRESHTOKEN)
  @Post('token/access')
  @UseGuards(RefreshTokenGuard)
  postTokenAccess(@Headers('authorization') rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, true);

    const newToken = this.authService.rotateToken(token, false);

    return {
      accessToken: newToken,
    };
  }

  @IsPublic(IsPublicEnum.ISREFRESHTOKEN)
  @Post('token/refresh')
  @UseGuards(RefreshTokenGuard)
  postTokenRefresh(@Headers('authorization') rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, true);

    const newToken = this.authService.rotateToken(token, true);

    return {
      refreshToken: newToken,
    };
  }

  @IsPublic(IsPublicEnum.ISPUBLIC)
  @Post('login/email')
  @UseGuards(BasicTokenGuard)
  postLoginEmail(@Headers('authorization') rawToken: string) {
    const token = this.authService.extractTokenFromHeader(rawToken, false);

    const credentials = this.authService.decodeBasicToken(token);

    return this.authService.loginWithEmail(credentials);
  }

  @IsPublic(IsPublicEnum.ISPUBLIC)
  @Post('register/email')
  postRegisterEmail(
    @Body() body: RegisterUserDto,
    // @Body('nickname') nickname: string,
    // @Body('email') email: string,
    // @Body(
    //   'password',
    //   new MaxLengthPipe(8, '비밀번호'),
    //   new MinLengthPipe(3, '비밀번호'),
    // )
    // password: string,
  ) {
    return this.authService.registerWithEmail(body);
  }
}
