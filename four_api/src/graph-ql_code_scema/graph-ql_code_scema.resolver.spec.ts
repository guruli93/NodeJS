import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlCodeScemaResolver } from './graph-ql_code_scema.resolver';
import { GraphQlCodeScemaService } from './graph-ql_code_scema.service';

describe('GraphQlCodeScemaResolver', () => {
  let resolver: GraphQlCodeScemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlCodeScemaResolver, GraphQlCodeScemaService],
    }).compile();

    resolver = module.get<GraphQlCodeScemaResolver>(GraphQlCodeScemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
