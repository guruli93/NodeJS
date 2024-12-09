import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlCodeFirstResolver } from './graph-ql_code_first.resolver';
import { GraphQlCodeFirstService } from './graph-ql_code_first.service';

describe('GraphQlCodeFirstResolver', () => {
  let resolver: GraphQlCodeFirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlCodeFirstResolver, GraphQlCodeFirstService],
    }).compile();

    resolver = module.get<GraphQlCodeFirstResolver>(GraphQlCodeFirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
