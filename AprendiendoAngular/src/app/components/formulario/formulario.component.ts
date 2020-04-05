import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    public user: any;
    public campo: string;
    public keyPressed: string;


    constructor() {
        this.user = {
            name: '',
            lastname: '',
            bio: '',
            genre: ''
        };
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.log(this.user);
    }

    onClick(): void {
        alert('Haz dado click');
    }

    onBlur(): void {
        alert('haz salido del input');
    }

    onKeyPress(evt) {
        this.keyPressed = `Haz presionado: ${evt.key}`;


    }

}
