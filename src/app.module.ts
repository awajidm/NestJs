import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { ArtistsController } from './artists/artists.controller';
import { ArtistsService } from './artists/artists.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController, ArtistsController],
  providers: [AppService, CoffeesService, ArtistsService],
})
export class AppModule {}
