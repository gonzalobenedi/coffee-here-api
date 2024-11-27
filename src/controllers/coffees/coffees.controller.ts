import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  constructor() {}

  @Get()
  getCoffees() {}

  @Get(':id')
  getCoffee() {}

  @Post()
  createCoffee() {}

  @Put(':id')
  updateCoffee() {}

  @Patch(':id')
  updateCoffeePartial() {}

  @Delete(':id')
  deleteCoffee() {}
}
