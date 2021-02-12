import { Injectable } from '@nestjs/common';
import { Artist } from './entity/artist.entity';

@Injectable()
export class ArtistsService {
    private artits: Artist[] = [
        {
            id: 1,
            name: 'Usman',
            image: 'Image URL',
        }
    ];

    findAll(){
        return this.artits;
    }

    findOne(id: string){
        return this.artits.find(item => item.id === +id);
    }

    create(createArtistDto: any){
        this.artits.push(createArtistDto)
    }

    update(id: string, updateArtistDto: any){
        const existingArtist = this.findOne(id);
        if(existingArtist){
            //update the existing entity
        }
    }

    remove(id: string) {
        const artistIndex = this.artits.findIndex(item => item.id === +id);
        if (artistIndex >= 0){
            this.artits.splice(artistIndex, 1);
        }
    }
}
