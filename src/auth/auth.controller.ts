import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
@UseGuards(GoogleAuthGuard)
export class AuthController {
  @Get('google/login')
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  @Get('google/redirect')
  handleRedirect() {
    return { msg: 'Google Redirect' };
  }
}
