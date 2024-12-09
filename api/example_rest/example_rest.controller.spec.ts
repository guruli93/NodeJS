import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRestController } from './example_rest.controller';
import { ExampleRestService } from './example_rest.service';

describe('ExampleRestController', () => {
  let controller: ExampleRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleRestController],
      providers: [ExampleRestService],
    }).compile();

    controller = module.get<ExampleRestController>(ExampleRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
