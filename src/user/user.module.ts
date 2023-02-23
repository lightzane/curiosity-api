import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CuriosityModule } from '../curiosity/curiosity.module';

@Module({
  imports: [CuriosityModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
