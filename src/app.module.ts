import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeeService } from './coffees/coffee.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeeService],
})
export class AppModule {}
