import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'app-pruebas',
    templateUrl: './pruebas.component.html',
    styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
    public name: string;
    public lastname: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: Params) => {

            this.name = params.get('nombre');
            this.lastname = params.get('apellido');
        });
    }

    redirect(): void {
        this.router.navigate(['/pruebas', 'Will', 'AG']);
    }

}
