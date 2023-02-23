import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginDto } from '../shared/dto';
import { Curiosity, User } from '../shared/models';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() dto: LoginDto): boolean {
    return this.userService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto): User {
    return this.userService.verifyLogin(dto);
  }

  @Get(':id/favorites')
  myFavorites(@Param('id') userId: User['_id']): Curiosity[] {
    return this.userService.myFavorites(userId);
  }
}
