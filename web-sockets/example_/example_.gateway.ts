import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ExampleService } from './example_.service';
import { CreateExampleDto } from './dto/create-example_.dto';
import { UpdateExampleDto } from './dto/update-example_.dto';

@WebSocketGateway()
export class ExampleGateway {
  constructor(private readonly exampleService: ExampleService) {}

  @SubscribeMessage('createExample')
  create(@MessageBody() createExampleDto: CreateExampleDto) {
    return this.exampleService.create(createExampleDto);
  }

  @SubscribeMessage('findAllExample')
  findAll() {
    return this.exampleService.findAll();
  }

  @SubscribeMessage('findOneExample')
  findOne(@MessageBody() id: number) {
    return this.exampleService.findOne(id);
  }

  @SubscribeMessage('updateExample')
  update(@MessageBody() updateExampleDto: UpdateExampleDto) {
    return this.exampleService.update(updateExampleDto.id, updateExampleDto);
  }

  @SubscribeMessage('removeExample')
  remove(@MessageBody() id: number) {
    return this.exampleService.remove(id);
  }
}
