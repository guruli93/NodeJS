import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExampleRestService } from './example_rest.service';
import { CreateExampleRestDto } from './dto/create-example_rest.dto';
import { UpdateExampleRestDto } from './dto/update-example_rest.dto';

@Controller('example-rest')
export class ExampleRestController {
  constructor(private readonly exampleRestService: ExampleRestService) {}

  @Post()
  create(@Body() createExampleRestDto: CreateExampleRestDto) {
    return this.exampleRestService.create(createExampleRestDto);
  }

  @Get()
  findAll() {
    return this.exampleRestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exampleRestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExampleRestDto: UpdateExampleRestDto) {
    return this.exampleRestService.update(+id, updateExampleRestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleRestService.remove(+id);
  }
}
