import { CreateExampleGraphQlInput } from './create-example_graph-ql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExampleGraphQlInput extends PartialType(CreateExampleGraphQlInput) {
  @Field(() => Int)
  id: number;
}
