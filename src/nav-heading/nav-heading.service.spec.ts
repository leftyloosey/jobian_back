import { Test, TestingModule } from '@nestjs/testing';
import { NavHeadingService } from './nav-heading.service';

describe('NavHeadingService', () => {
  let service: NavHeadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavHeadingService],
    }).compile();

    service = module.get<NavHeadingService>(NavHeadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
