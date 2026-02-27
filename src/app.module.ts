import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';
import { NavHeadingModule } from './nav-heading/nav-heading.module';
import { NavMemberModule } from './nav-member/nav-member.module';
import GraphQLJSON from 'graphql-type-json';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      typePaths: ['./**/*.graphql'],
      resolvers: { JSON: GraphQLJSON },
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    PostsModule,
    UserModule,
    CollectionModule,
    AuthModule,
    NavHeadingModule,
    NavMemberModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
