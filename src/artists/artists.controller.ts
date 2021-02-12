import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
    constructor(private readonly artistsService: ArtistsService){

    }

    @Get()
    findAll(@Query() paginationQuery) {
        //const {limit, offset} = paginationQuery;
        return this.artistsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.artistsService.findOne(id);
    }

    @Post()
    create(@Body() body) {
        return this.artistsService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.artistsService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.artistsService.remove(id);
    }

}
