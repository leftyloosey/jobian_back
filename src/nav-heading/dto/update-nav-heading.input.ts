import { CreateNavHeadingInput } from './create-nav-heading.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNavHeadingInput extends PartialType(CreateNavHeadingInput) {
  id: number;
  blogTitle: string;
  authorId: number;
}
