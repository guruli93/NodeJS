import { Module } from '@nestjs/common';
import { ExampleService } from './example_.service';
import { ExampleResolver } from './example_.resolver';

@Module({
  providers: [ExampleResolver, ExampleService],
})
export class ExampleModule {}
