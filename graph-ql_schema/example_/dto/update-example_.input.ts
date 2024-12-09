import { CreateExampleInput } from './create-example_.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExampleInput extends PartialType(CreateExampleInput) {
  id: number;
}
