import { PartialType } from '@nestjs/mapped-types';
import { CreateExampleRestDto } from './create-example_rest.dto';

export class UpdateExampleRestDto extends PartialType(CreateExampleRestDto) {}
