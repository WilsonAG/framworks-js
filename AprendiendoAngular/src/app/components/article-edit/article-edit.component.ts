import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { config } from 'src/app/services/config.service';
import swal from 'sweetalert';

@Component({
    selector: 'app-article-edit',
    templateUrl: '../article-new/article-new.component.html',
    styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
    public article: Article;
    public status: string;
    public isEditable: boolean;
    public titlePage: string;

    public afuConfig = {
        multiple: false,
        formatsAllowed: '.jpg,.png, .gif, .jpeg',
        maxSize: '50',
        uploadAPI: {
            url: `${config.uri}upload-image`,
        },
        theme: 'attachPin',
        hideProgressBar: true,
        hideResetBtn: true,
        hideSelectBtn: false,
        replaceTexts: {
            selectFileBtn: 'Select Files',
            resetBtn: 'Reset',
            uploadBtn: 'Upload',
            dragNDropBox: 'Drag N Drop',
            attachPinBtn: 'Sube la imagen del articulo',
            afterUploadMsg_success: 'Successfully Uploaded !',
            afterUploadMsg_error: 'Upload Failed !'
        }
    };

    constructor(
        private _article: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.article = new Article(null, null, null, null, null);
        this.isEditable = true;
        this.titlePage = 'Editar articulo';
    }


    ngOnInit(): void {

        this.getArticle();
    }

    onSubmit() {
        this._article.update(this.article._id, this.article).subscribe(
            res => {
                if (res.status === 'ok') {
                    this.status = 'ok';
                    this.article = res.article;
                    swal(
                        'Articulo listo!!',
                        'El articulo se ha actualizado correctamente',
                        'success'
                    );
                    this._router.navigate(['/blog/articulo', this.article._id]);

                } else {
                    this.status = 'error';
                }
            },
            err => {
                console.log(err);
                swal(
                    'Algo salio mal :(',
                    'El proceso no se pudo completar correctamente, intentalo despues.',
                    'success'
                );
                this.status = 'error';
            }
        );

    }

    imageUpload(data: any) {
        const imageData = JSON.parse(data.response);
        this.article.image = imageData.fileName;
        console.log(this.article);
    }

    getArticle() {
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
