import { Test, TestingModule } from '@nestjs/testing';
import { ExampleGateway } from './example_.gateway';
import { ExampleService } from './example_.service';

describe('ExampleGateway', () => {
  let gateway: ExampleGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleGateway, ExampleService],
    }).compile();

    gateway = module.get<ExampleGateway>(ExampleGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
