import { Test, TestingModule } from '@nestjs/testing';
import { NavMemberService } from './nav-member.service';

describe('NavMemberService', () => {
  let service: NavMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavMemberService],
    }).compile();

    service = module.get<NavMemberService>(NavMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
