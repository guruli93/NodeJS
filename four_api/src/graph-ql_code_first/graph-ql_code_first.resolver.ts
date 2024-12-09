import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphQlCodeFirstService } from './graph-ql_code_first.service';
import { GraphQlCodeFirst } from './entities/graph-ql_code_first.entity';
import { CreateGraphQlCodeFirstInput } from './dto/create-graph-ql_code_first.input';
import { UpdateGraphQlCodeFirstInput } from './dto/update-graph-ql_code_first.input';

@Resolver(() => GraphQlCodeFirst)
export class GraphQlCodeFirstResolver {
  constructor(private readonly graphQlCodeFirstService: GraphQlCodeFirstService) {}

  @Mutation(() => GraphQlCodeFirst)
  createGraphQlCodeFirst(@Args('createGraphQlCodeFirstInput') createGraphQlCodeFirstInput: CreateGraphQlCodeFirstInput) {
    return this.graphQlCodeFirstService.create(createGraphQlCodeFirstInput);
  }

  @Query(() => [GraphQlCodeFirst], { name: 'graphQlCodeFirst' })
  findAll() {
    return this.graphQlCodeFirstService.findAll();
  }

  @Query(() => GraphQlCodeFirst, { name: 'graphQlCodeFirst' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphQlCodeFirstService.findOne(id);
  }

  @Mutation(() => GraphQlCodeFirst)
  updateGraphQlCodeFirst(@Args('updateGraphQlCodeFirstInput') updateGraphQlCodeFirstInput: UpdateGraphQlCodeFirstInput) {
    return this.graphQlCodeFirstService.update(updateGraphQlCodeFirstInput.id, updateGraphQlCodeFirstInput);
  }

  @Mutation(() => GraphQlCodeFirst)
  removeGraphQlCodeFirst(@Args('id', { type: () => Int }) id: number) {
    return this.graphQlCodeFirstService.remove(id);
  }
}
