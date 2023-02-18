import { Test, TestingModule } from '@nestjs/testing';
import { CuriosityController } from './curiosity.controller';
import { CuriosityService } from './curiosity.service';

describe('CuriosityController', () => {
  let controller: CuriosityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriosityController],
      providers: [CuriosityService],
    }).compile();

    controller = module.get<CuriosityController>(CuriosityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
