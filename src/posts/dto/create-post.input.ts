import { InputJsonObject } from '@prisma/client/runtime/client';

export class CreatePostInput {
  timestamp: Date;
  title: string;
  heading: string;
  content: InputJsonObject;
  published: boolean;
  collectionId: number;
  headerImageString: string;
}
