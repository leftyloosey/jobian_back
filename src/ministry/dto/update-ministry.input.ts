import { CreateMinistryInput } from './create-ministry.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMinistryInput extends PartialType(CreateMinistryInput) {
  id: number;
  title: string;
  heading: string;
}
