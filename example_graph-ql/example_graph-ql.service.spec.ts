import { Test, TestingModule } from '@nestjs/testing';
import { ExampleGraphQlService } from './example_graph-ql.service';

describe('ExampleGraphQlService', () => {
  let service: ExampleGraphQlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleGraphQlService],
    }).compile();

    service = module.get<ExampleGraphQlService>(ExampleGraphQlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
