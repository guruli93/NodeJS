import { Module } from '@nestjs/common';
import { ExampleRestService } from './example_rest.service';
import { ExampleRestController } from './example_rest.controller';

@Module({
  controllers: [ExampleRestController],
  providers: [ExampleRestService],
})
export class ExampleRestModule {}
