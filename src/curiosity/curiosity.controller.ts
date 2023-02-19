import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { FavoriteDto, WriteDto } from '../shared/dto';
import { Curiosity } from '../shared/models';
import { CuriosityService } from './curiosity.service';

@Controller('curiosity')
export class CuriosityController {
  constructor(private readonly curiosityService: CuriosityService) {}

  @Get('all')
  getAllCuriosities(): Curiosity[] {
    return this.curiosityService.curiosities;
  }

  @Post('add')
  addCuriosity(@Body() dto: WriteDto): Curiosity {
    return this.curiosityService.addCuriosity(dto);
  }

  @Patch('favorite')
  favorite(@Body() dto: FavoriteDto): Curiosity {
    return this.curiosityService.favorite(dto);
  }

  @Patch('read')
  read(@Body('curiosityId') curiosityId: string): Curiosity {
    return this.curiosityService.read(curiosityId);
  }
}
