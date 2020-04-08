import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './components/mycomponent/my-component';
import { MoviesComponent } from './components/movies/movies.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PageComponent } from './components/page/page.component';
import { AppRoutingModule } from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { MovieComponent } from './components/movie/movie.component';
import { EsPar } from './pipes/espar.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './components/articles/articles.component';
import { MomentModule } from 'angular2-moment';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        MyComponent,
        MoviesComponent,
        PruebasComponent,
        HeaderComponent,
        SliderComponent,
        SidebarComponent,
        FooterComponent,
        HomeComponent,
        BlogComponent,
        FormularioComponent,
        PageComponent,
        ErrorComponent,
        MovieComponent,
        EsPar,
        ArticlesComponent,
        ArticleComponent,
        SearchComponent,
        ArticleNewComponent,
        ArticleEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MomentModule,
        AngularFileUploaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
