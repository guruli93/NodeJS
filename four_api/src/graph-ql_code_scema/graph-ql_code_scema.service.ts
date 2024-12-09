import { Injectable } from '@nestjs/common';
import { CreateGraphQlCodeScemaInput } from './dto/create-graph-ql_code_scema.input';
import { UpdateGraphQlCodeScemaInput } from './dto/update-graph-ql_code_scema.input';

@Injectable()
export class GraphQlCodeScemaService {
  create(createGraphQlCodeScemaInput: CreateGraphQlCodeScemaInput) {
    return 'This action adds a new graphQlCodeScema';
  }

  findAll() {
    return `This action returns all graphQlCodeScema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphQlCodeScema`;
  }

  update(id: number, updateGraphQlCodeScemaInput: UpdateGraphQlCodeScemaInput) {
    return `This action updates a #${id} graphQlCodeScema`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphQlCodeScema`;
  }
}
