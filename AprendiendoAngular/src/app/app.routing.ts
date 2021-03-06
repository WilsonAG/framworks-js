import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
    { path: 'blog/crear', component: ArticleNewComponent },
    { path: 'blog/editar/:id', component: ArticleEditComponent },
    { path: 'buscar/:token', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: MoviesComponent },
    { path: 'pruebas', component: PruebasComponent },
    { path: 'pruebas/:nombre/:apellido', component: PruebasComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
