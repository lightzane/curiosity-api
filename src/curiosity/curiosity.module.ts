import { Module } from '@nestjs/common';
import { CuriosityService } from './curiosity.service';
import { CuriosityController } from './curiosity.controller';

@Module({
  controllers: [CuriosityController],
  providers: [CuriosityService],
  exports: [CuriosityService],
})
export class CuriosityModule {}
