import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('stores')
export class StoresController {
  constructor() {}

  @Get()
  getStores() {}

  @Get(':id')
  getStore() {}

  @Post()
  createStore() {}

  @Put(':id')
  updateStore() {}

  @Patch(':id')
  updateStorePartial() {}

  @Delete(':id')
  deleteStore() {}
}
