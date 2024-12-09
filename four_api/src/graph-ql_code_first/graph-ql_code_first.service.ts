import { Injectable } from '@nestjs/common';
import { CreateGraphQlCodeFirstInput } from './dto/create-graph-ql_code_first.input';
import { UpdateGraphQlCodeFirstInput } from './dto/update-graph-ql_code_first.input';

@Injectable()
export class GraphQlCodeFirstService {
  create(createGraphQlCodeFirstInput: CreateGraphQlCodeFirstInput) {
    return 'This action adds a new graphQlCodeFirst';
  }

  findAll() {
    return `This action returns all graphQlCodeFirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphQlCodeFirst`;
  }

  update(id: number, updateGraphQlCodeFirstInput: UpdateGraphQlCodeFirstInput) {
    return `This action updates a #${id} graphQlCodeFirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphQlCodeFirst`;
  }
}
