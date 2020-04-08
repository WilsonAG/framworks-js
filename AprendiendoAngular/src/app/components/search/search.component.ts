import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public articles: Array<Article>;
    public token: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _article: ArticleService
    ) { }

    ngOnInit(): void {
        this._route.params.subscribe((params: Params) => {
            const token = params.token;
            this.token = token;
            this._article.search(token).subscribe(
                res => {
                    if (res.articles) {
                        this.articles = res.articles;
                    }
                },
                err => {
                    console.log(err);
                    if (err.status === 404) {
                        this.articles = [];
                    }
                    // this._router.navigate(['/home']);
                }
            );
        });
    }


}
