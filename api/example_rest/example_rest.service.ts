import { Injectable } from '@nestjs/common';
import { CreateExampleRestDto } from './dto/create-example_rest.dto';
import { UpdateExampleRestDto } from './dto/update-example_rest.dto';

@Injectable()
export class ExampleRestService {
  create(createExampleRestDto: CreateExampleRestDto) {
    return 'This action adds a new exampleRest';
  }

  findAll() {
    return `This action returns all exampleRest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exampleRest`;
  }

  update(id: number, updateExampleRestDto: UpdateExampleRestDto) {
    return `This action updates a #${id} exampleRest`;
  }

  remove(id: number) {
    return `This action removes a #${id} exampleRest`;
  }
}
