import { Module } from '@nestjs/common';
import { NavHeadingService } from './nav-heading.service';
import { NavHeadingResolver } from './nav-heading.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [NavHeadingResolver, NavHeadingService, PrismaService],
})
export class NavHeadingModule {}
