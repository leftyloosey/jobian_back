import { Test, TestingModule } from '@nestjs/testing';
import { NavMemberResolver } from './nav-member.resolver';
import { NavMemberService } from './nav-member.service';

describe('NavMemberResolver', () => {
  let resolver: NavMemberResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavMemberResolver, NavMemberService],
    }).compile();

    resolver = module.get<NavMemberResolver>(NavMemberResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
