import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CuriosityModule } from './curiosity/curiosity.module';

@Module({
  imports: [UserModule, CuriosityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
