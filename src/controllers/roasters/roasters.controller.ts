import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('roasters')
export class RoastersController {
  constructor() {}

  @Get()
  getRoasters() {}

  @Get(':id')
  getRoaster() {}

  @Post()
  createRoaster() {}

  @Put(':id')
  updateRoaster() {}

  @Patch(':id')
  updateRoasterPartial() {}

  @Delete(':id')
  deleteRoaster() {}
}
