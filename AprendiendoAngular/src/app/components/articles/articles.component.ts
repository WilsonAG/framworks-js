import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { config } from '../../services/config.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    @Input() articles: Array<Article>;
    public uri: string;

    constructor() {
        this.uri = config.uri;
    }

    ngOnInit(): void {

    }

    getImage(img: string) {
        return `${config.uri + 'image/' + img}`;
    }
}
