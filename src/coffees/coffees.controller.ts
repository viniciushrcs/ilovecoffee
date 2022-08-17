import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesservice: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesservice.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.coffeesservice.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesservice.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesservice.remove(id);
  }
}
