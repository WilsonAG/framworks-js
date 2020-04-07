import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public title: string;
    public lastArticles: Array<Article>;

    constructor(
        private _article: ArticleService
    ) {
        this.title = 'Ultimos Articulos';
    }

    ngOnInit(): void {
        this._article.getArticles(5).subscribe(
            res => {
                if (res.articles) {
                    this.lastArticles = res.articles;
                }
                console.log(this.lastArticles);
            },
            err => {
                console.log(err);
            }
        );
    }

}
