import { Module } from '@nestjs/common';
import { ExampleService } from './example_.service';
import { ExampleGateway } from './example_.gateway';

@Module({
  providers: [ExampleGateway, ExampleService],
})
export class ExampleModule {}
