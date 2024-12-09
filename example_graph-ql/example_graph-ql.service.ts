import { Injectable } from '@nestjs/common';
import { CreateExampleGraphQlInput } from './dto/create-example_graph-ql.input';
import { UpdateExampleGraphQlInput } from './dto/update-example_graph-ql.input';

@Injectable()
export class ExampleGraphQlService {
  create(createExampleGraphQlInput: CreateExampleGraphQlInput) {
    return 'This action adds a new exampleGraphQl';
  }

  findAll() {
    return `This action returns all exampleGraphQl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exampleGraphQl`;
  }

  update(id: number, updateExampleGraphQlInput: UpdateExampleGraphQlInput) {
    return `This action updates a #${id} exampleGraphQl`;
  }

  remove(id: number) {
    return `This action removes a #${id} exampleGraphQl`;
  }
}
