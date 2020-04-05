import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    holamundo() {
        return 'hola mundo desde un servicio';
    }

    getMovies() {
        return [
            new Movie(
                2019,
                'Spiderman',
                'https://pbs.twimg.com/media/D9M5NIXXkAAtAk_?format=jpg&name=small'
            ),
            new Movie(
                2012,
                'Avengers',
                'https://cnet2.cbsistatic.com/img/VcjARNnYtd1qwbOCueNf3bnOlhc=/1092x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg'
            ),

            new Movie(
                2019,
                'Batman v Superman',
                'https://es.web.img2.acsta.net/pictures/16/03/04/15/47/480948.jpg'
            ),
            new Movie(2015,
                'Batman v Superman',
                'https://es.web.img2.acsta.net/pictures/16/03/04/15/47/480948.jpg'
            ),
        ];
    }
}
