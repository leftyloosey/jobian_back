import { Module } from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { MinistryResolver } from './ministry.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MinistryResolver, MinistryService, PrismaService],
})
export class MinistryModule {}
