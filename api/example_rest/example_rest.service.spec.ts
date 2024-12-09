import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRestService } from './example_rest.service';

describe('ExampleRestService', () => {
  let service: ExampleRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleRestService],
    }).compile();

    service = module.get<ExampleRestService>(ExampleRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
