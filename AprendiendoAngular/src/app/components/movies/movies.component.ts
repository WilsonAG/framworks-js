import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public movies: Movie[];
    public favorite: Movie;
    public fecha: Date;

    constructor() {
        this.titulo = 'Componente de peliculas';
        this.movies = [
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
        this.fecha = new Date(2018, 8, 12);
        console.log(this.movies);
    }
    ngOnDestroy(): void {
        console.log('El componente se va a destruir');
    }
    ngDoCheck(): void {
        console.log('Do check lanzado');
    }

    ngOnInit(): void {
        console.log('Componente cargado con oninit');
    }

    changeTitle() {
        this.titulo = 'El titulo cambio';
    }

    public showFavorite(evt: any) {
        this.favorite = evt.movie;
    }

}

interface Imovie {
    year: number;
    title: string;
    image: string;
}
