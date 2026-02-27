import { Test, TestingModule } from '@nestjs/testing';
import { NavHeadingResolver } from './nav-heading.resolver';
import { NavHeadingService } from './nav-heading.service';

describe('NavHeadingResolver', () => {
  let resolver: NavHeadingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavHeadingResolver, NavHeadingService],
    }).compile();

    resolver = module.get<NavHeadingResolver>(NavHeadingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
