import { InputJsonObject } from '@prisma/client/runtime/client';

export class CreatePostInput {
  timestamp: Date;
  title: string;
  content: InputJsonObject;
  published: boolean;
  ministryId: number;
}
