import { Test, TestingModule } from '@nestjs/testing';
import { ExampleGraphQlResolver } from './example_graph-ql.resolver';
import { ExampleGraphQlService } from './example_graph-ql.service';

describe('ExampleGraphQlResolver', () => {
  let resolver: ExampleGraphQlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleGraphQlResolver, ExampleGraphQlService],
    }).compile();

    resolver = module.get<ExampleGraphQlResolver>(ExampleGraphQlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
