import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './my-component.component.html'
})
export class MyComponent {
    public title: string;
    public comment: string;
    public showMovies: boolean;

    constructor() {
        console.log('My component is already loaded!');
        this.title = 'Hola mundo desde un componenete de angular';
        this.comment = 'My first component';
        this.showMovies = true;
    }

    hideMovies() {
        this.showMovies = false;
    }
}
