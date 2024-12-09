import { Test, TestingModule } from '@nestjs/testing';
import { ExampleResolver } from './example_.resolver';
import { ExampleService } from './example_.service';

describe('ExampleResolver', () => {
  let resolver: ExampleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleResolver, ExampleService],
    }).compile();

    resolver = module.get<ExampleResolver>(ExampleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
