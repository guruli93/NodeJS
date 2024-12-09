import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GraphQlCodeScemaService } from './graph-ql_code_scema.service';
import { CreateGraphQlCodeScemaInput } from './dto/create-graph-ql_code_scema.input';
import { UpdateGraphQlCodeScemaInput } from './dto/update-graph-ql_code_scema.input';

@Resolver('GraphQlCodeScema')
export class GraphQlCodeScemaResolver {
  constructor(private readonly graphQlCodeScemaService: GraphQlCodeScemaService) {}

  @Mutation('createGraphQlCodeScema')
  create(@Args('createGraphQlCodeScemaInput') createGraphQlCodeScemaInput: CreateGraphQlCodeScemaInput) {
    return this.graphQlCodeScemaService.create(createGraphQlCodeScemaInput);
  }

  @Query('graphQlCodeScema')
  findAll() {
    return this.graphQlCodeScemaService.findAll();
  }

  @Query('graphQlCodeScema')
  findOne(@Args('id') id: number) {
    return this.graphQlCodeScemaService.findOne(id);
  }

  @Mutation('updateGraphQlCodeScema')
  update(@Args('updateGraphQlCodeScemaInput') updateGraphQlCodeScemaInput: UpdateGraphQlCodeScemaInput) {
    return this.graphQlCodeScemaService.update(updateGraphQlCodeScemaInput.id, updateGraphQlCodeScemaInput);
  }

  @Mutation('removeGraphQlCodeScema')
  remove(@Args('id') id: number) {
    return this.graphQlCodeScemaService.remove(id);
  }
}
