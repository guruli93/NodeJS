import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestApiModule } from './rest_api/rest_api.module';
import { GraphQlCodeFirstModule } from './graph-ql_code_first/graph-ql_code_first.module';
import { GraphQlCodeScemaModule } from './graph-ql_code_scema/graph-ql_code_scema.module';
import { WebSocketModule } from './web-socket/web-socket.module';

@Module({
  imports: [RestApiModule, GraphQlCodeFirstModule, GraphQlCodeScemaModule, WebSocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
