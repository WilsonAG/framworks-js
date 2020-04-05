import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public movies: Array<Imovie>;

    constructor() {
        this.titulo = 'Componente de peliculas';
        this.movies = [
            { year: 2019, title: 'Spiderman', image: 'https://pbs.twimg.com/media/D9M5NIXXkAAtAk_?format=jpg&name=small' },
            { year: 2012, title: 'Avengers', image: 'https://cnet2.cbsistatic.com/img/VcjARNnYtd1qwbOCueNf3bnOlhc=/1092x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg' },
            { year: 2019, title: 'Batman v Superman', image: 'https://es.web.img2.acsta.net/pictures/16/03/04/15/47/480948.jpg' },
            { year: 2015, title: 'Batman v Superman', image: 'https://es.web.img2.acsta.net/pictures/16/03/04/15/47/480948.jpg' },
        ];

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

}

interface Imovie {
    year: number;
    title: string;
    image: string;
}
