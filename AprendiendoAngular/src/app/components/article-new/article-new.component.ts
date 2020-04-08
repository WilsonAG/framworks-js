import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { config } from 'src/app/services/config.service';

import swal from 'sweetalert';


@Component({
    selector: 'app-article-new',
    templateUrl: './article-new.component.html',
    styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

    public article: Article;
    public status: string;
    public titlePage: string;
    public isEditable: boolean;

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
        private _router: Router
    ) {
        this.article = new Article(null, null, null, null, null);
        this.titlePage = 'Crear Articulo';
    }

    ngOnInit(): void {
        this.isEditable = false;
    }

    onSubmit() {

        this._article.create(this.article).subscribe(
            res => {
                if (res.status === 'ok') {
                    this.status = 'ok';
                    this.article = res.article;
                    //alerta

                    swal(
                        'Articulo listo!!',
                        'Se ha creado correctamente',
                        'success'
                    );

                    this._router.navigate(['/blog']);

                } else {
                    swal(
                        'Algo salio mal :(',
                        'El proceso no se pudo completar correctamente, intentalo despues.',
                        'success'
                    );
                    this.status = 'error';
                }
            },
            err => {
                console.log(err);
                this.status = 'error';
            }
        );

    }

    imageUpload(data: any) {
        const imageData = JSON.parse(data.response);
        this.article.image = imageData.fileName;
        console.log(this.article);
    }

    getImage(img: string) {
        return `${config.uri + 'image/' + img}`;
    }

}
