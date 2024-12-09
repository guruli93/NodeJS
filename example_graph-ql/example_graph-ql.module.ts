import { Module } from '@nestjs/common';
import { ExampleGraphQlService } from './example_graph-ql.service';
import { ExampleGraphQlResolver } from './example_graph-ql.resolver';

@Module({
  providers: [ExampleGraphQlResolver, ExampleGraphQlService],
})
export class ExampleGraphQlModule {}
