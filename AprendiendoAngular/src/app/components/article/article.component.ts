import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { config } from 'src/app/services/config.service';
import swal from 'sweetalert';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    public article: Article;

    constructor(
        private _article: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._route.params.subscribe((params: Params) => {
            const id = params.id;

            this._article.getArticle(id).subscribe(
                res => {
                    if (res.article) {
                        this.article = res.article;
                    } else {
                        this._router.navigate(['/home']);
                    }

                }, err => {
                    console.log(err);
                });
        });


    }

    delete(id: string) {
        swal({
            title: '¿Estas seguro?',
            text: 'Una vez eliminado no lo podras recuperar',
            icon: 'warning',
            buttons: ['Cancelar', 'Eliminar'],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this._article.delete(id).subscribe(
                        res => {
                            swal('El articulo ha sido eliminado', {
                                icon: 'success',
                            });
                            this._router.navigate(['/blog']);
                        },
                        err => {
                            this._router.navigate(['/blog']);
                            console.log(err);
                        }
                    );
                } else {
                    swal('Se ha cancelado este proceso.');
                }
            });


    }

    getImage(img: string) {
        return `${config.uri + 'image/' + img}`;
    }

}
