import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';



@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    public articles: Array<Article>;

    constructor(private _article: ArticleService) {

    }

    ngOnInit(): void {
        this._article.getArticles().subscribe(
            res => {
                if (res.articles) {
                    this.articles = res.articles;
                }
            },
            err => {
                console.log(err);
            }
        );

    }





}
