import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movies.service';

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

    constructor(private moviesService: MovieService) {
        this.titulo = 'Componente de peliculas';
        this.movies = this.moviesService.getMovies();
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
        console.log(this.moviesService.holamundo());
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
