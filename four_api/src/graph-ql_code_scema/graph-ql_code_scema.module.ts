import { Module } from '@nestjs/common';
import { GraphQlCodeScemaService } from './graph-ql_code_scema.service';
import { GraphQlCodeScemaResolver } from './graph-ql_code_scema.resolver';

@Module({
  providers: [GraphQlCodeScemaResolver, GraphQlCodeScemaService],
})
export class GraphQlCodeScemaModule {}
