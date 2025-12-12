import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { DateScalar } from 'src/config/custom_scalars/date_scalar';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PostsResolver, PostsService, DateScalar, PrismaService],
})
export class PostsModule {}
