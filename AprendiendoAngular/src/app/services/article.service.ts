import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './config.service';
import { Observable } from 'rxjs';
import { Article } from '../models/article';


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

    search(token: string): Observable<any> {
        return this._http.get(`${this.uri}search/${token}`);
    }

    create(article: Article): Observable<any> {
        const params = JSON.stringify(article);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(`${this.uri}save`, params, { headers });
    }

    update(id: string, article: Article): Observable<any> {
        const params = JSON.stringify(article);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(`${this.uri}article/${id}`, params, { headers });
    }

    delete(id: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(`${this.uri}article/${id}`, { headers });

    }


}

