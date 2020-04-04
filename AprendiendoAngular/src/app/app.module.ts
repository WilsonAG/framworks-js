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
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
