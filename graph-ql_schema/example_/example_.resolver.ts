import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExampleService } from './example_.service';
import { CreateExampleInput } from './dto/create-example_.input';
import { UpdateExampleInput } from './dto/update-example_.input';

@Resolver('Example')
export class ExampleResolver {
  constructor(private readonly exampleService: ExampleService) {}

  @Mutation('createExample')
  create(@Args('createExampleInput') createExampleInput: CreateExampleInput) {
    return this.exampleService.create(createExampleInput);
  }

  @Query('example')
  findAll() {
    return this.exampleService.findAll();
  }

  @Query('example')
  findOne(@Args('id') id: number) {
    return this.exampleService.findOne(id);
  }

  @Mutation('updateExample')
  update(@Args('updateExampleInput') updateExampleInput: UpdateExampleInput) {
    return this.exampleService.update(updateExampleInput.id, updateExampleInput);
  }

  @Mutation('removeExample')
  remove(@Args('id') id: number) {
    return this.exampleService.remove(id);
  }
}
