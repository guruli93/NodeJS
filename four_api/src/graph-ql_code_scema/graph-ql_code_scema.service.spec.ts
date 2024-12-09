import { Test, TestingModule } from '@nestjs/testing';
import { GraphQlCodeScemaService } from './graph-ql_code_scema.service';

describe('GraphQlCodeScemaService', () => {
  let service: GraphQlCodeScemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQlCodeScemaService],
    }).compile();

    service = module.get<GraphQlCodeScemaService>(GraphQlCodeScemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
