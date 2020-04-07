import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { config } from 'src/app/services/config.service';

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

    getImage(img: string) {
        return `${config.uri + 'image/' + img}`;
    }

}
