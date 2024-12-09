import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExampleGraphQlService } from './example_graph-ql.service';
import { ExampleGraphQl } from './entities/example_graph-ql.entity';
import { CreateExampleGraphQlInput } from './dto/create-example_graph-ql.input';
import { UpdateExampleGraphQlInput } from './dto/update-example_graph-ql.input';

@Resolver(() => ExampleGraphQl)
export class ExampleGraphQlResolver {
  constructor(private readonly exampleGraphQlService: ExampleGraphQlService) {}

  @Mutation(() => ExampleGraphQl)
  createExampleGraphQl(@Args('createExampleGraphQlInput') createExampleGraphQlInput: CreateExampleGraphQlInput) {
    return this.exampleGraphQlService.create(createExampleGraphQlInput);
  }

  @Query(() => [ExampleGraphQl], { name: 'exampleGraphQl' })
  findAll() {
    return this.exampleGraphQlService.findAll();
  }

  @Query(() => ExampleGraphQl, { name: 'exampleGraphQl' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.exampleGraphQlService.findOne(id);
  }

  @Mutation(() => ExampleGraphQl)
  updateExampleGraphQl(@Args('updateExampleGraphQlInput') updateExampleGraphQlInput: UpdateExampleGraphQlInput) {
    return this.exampleGraphQlService.update(updateExampleGraphQlInput.id, updateExampleGraphQlInput);
  }

  @Mutation(() => ExampleGraphQl)
  removeExampleGraphQl(@Args('id', { type: () => Int }) id: number) {
    return this.exampleGraphQlService.remove(id);
  }
}
