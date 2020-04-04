import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;

    constructor() {
        this.titulo = 'Componente de peliculas';
        console.log('Contructor lanzado');
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
