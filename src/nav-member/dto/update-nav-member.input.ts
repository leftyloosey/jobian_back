import { InputJsonObject } from '@prisma/client/runtime/client';
import { CreateNavMemberInput } from './create-nav-member.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNavMemberInput extends PartialType(CreateNavMemberInput) {
  id: number;
  title: string;
  content: InputJsonObject;
}
