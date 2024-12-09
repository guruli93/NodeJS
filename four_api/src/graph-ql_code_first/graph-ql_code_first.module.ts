import { Module } from '@nestjs/common';
import { GraphQlCodeFirstService } from './graph-ql_code_first.service';
import { GraphQlCodeFirstResolver } from './graph-ql_code_first.resolver';

@Module({
  providers: [GraphQlCodeFirstResolver, GraphQlCodeFirstService],
})
export class GraphQlCodeFirstModule {}
