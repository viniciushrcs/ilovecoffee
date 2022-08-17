import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This route will return all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This route return coffee's ${id}`;
  }
}