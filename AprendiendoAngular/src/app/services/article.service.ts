import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    public uri: string;

    constructor(private _http: HttpClient) {
        this.uri = config.uri;
    }

    pruebas() {
        return 'article service';
    }

    getArticles(last: number = null): Observable<any> {
        if (!last) {
            return this._http.get(this.uri + 'articles');
        }
        return this._http.get(this.uri + 'articles/' + last);

    }

    getArticle(id: string): Observable<any> {
        return this._http.get(`${this.uri}article/${id}`);
    }


}

