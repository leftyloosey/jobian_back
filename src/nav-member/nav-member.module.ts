import { Module } from '@nestjs/common';
import { NavMemberService } from './nav-member.service';
import { NavMemberResolver } from './nav-member.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [NavMemberResolver, NavMemberService, PrismaService],
})
export class NavMemberModule {}
