import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionResolver } from './collection.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CollectionResolver, CollectionService, PrismaService],
})
export class CollectionModule {}
