import { InputJsonObject } from '@prisma/client/runtime/client';
import { CreatePostInput } from './create-post.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePostInput extends PartialType(CreatePostInput) {
  id: number;
  title: string;
  content: InputJsonObject;
  published: boolean;
}
