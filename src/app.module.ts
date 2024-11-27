import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CoffeesController } from './controllers/coffees/coffees.controller';
import { RoastersController } from './controllers/roasters/roasters.controller';
import { StoresController } from './controllers/stores/stores.controller';

@Module({
  imports: [],
  controllers: [CoffeesController, RoastersController, StoresController],
  providers: [AppService],
})
export class AppModule {}
