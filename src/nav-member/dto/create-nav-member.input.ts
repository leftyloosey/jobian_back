import { InputJsonObject } from '@prisma/client/runtime/client';

export class CreateNavMemberInput {
  title: string;
  content: InputJsonObject;
  collectionId: number;
}
