import { Test, TestingModule } from '@nestjs/testing';
import { CuriosityService } from './curiosity.service';

describe('CuriosityService', () => {
  let service: CuriosityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriosityService],
    }).compile();

    service = module.get<CuriosityService>(CuriosityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
