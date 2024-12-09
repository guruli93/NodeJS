import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleDto } from './create-example_.dto';

export class UpdateExampleDto extends PartialType(CreateExampleDto) {
  id: number;
}
