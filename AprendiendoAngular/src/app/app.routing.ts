import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
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
