import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    @Input() movie: Movie;
    @Output() selectAsFavorite = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    selectMovie(event: MouseEvent, movie: Movie) {

        this.selectAsFavorite.emit({
            movie
        });
    }

}
