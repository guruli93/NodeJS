import { CreateGraphQlCodeScemaInput } from './create-graph-ql_code_scema.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGraphQlCodeScemaInput extends PartialType(CreateGraphQlCodeScemaInput) {
  id: number;
}
