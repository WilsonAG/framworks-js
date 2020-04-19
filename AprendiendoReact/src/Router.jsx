import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SeccionPruebas from "./components/SeccionPruebas";
import MyComponent from './components/MyComponent';
import Error from './components/Error';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Fomulario';
import Peliculas from './components/Peliculas';

export default class Router extends Component {
    render() {
        return (

            < BrowserRouter >
                <Header />
                {/* Configuracion de rutas */}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/formulario" component={Formulario}></Route>
                    <Route exact path="/peliculas" component={Peliculas}></Route>

                    <Route exact path="/ruta-prueba" component={SeccionPruebas}></Route>
                    <Route exact path="/segunda-ruta" component={MyComponent}></Route>

                    <Route exact path="/pag-1" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo son un componente en el router</h1>
                            <MyComponent saludo="hola :v"></MyComponent>
                        </React.Fragment>
                    )}></Route>


                    <Route exact path="/pruebas/:nombre/:apellido?" render={(props) => {
                        let nombre = props.match.params.nombre
                        let apellidos = props.match.params.apellido
                        return (
                            <div className="content">
                                <h1 className="subheader">Pagina de puebas</h1>
                                <h2>
                                    {
                                        nombre && !apellidos &&
                                        nombre
                                    } {
                                        nombre && apellidos &&
                                        <React.Fragment>
                                            {nombre} {apellidos}
                                        </React.Fragment>
                                    }
                                </h2>
                            </div>
                        )
                    }}></Route>
                    <Route component={Error}></Route>
                </Switch>
                <div className="clearfix"></div>
                <Footer></Footer>
            </BrowserRouter >
        )
    }
}
