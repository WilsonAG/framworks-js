import React, { Component } from 'react'
import logo from "../assets/images/logo.svg";
import MyComponent from "./MyComponent.jsx";
import Peliculas from "./Peliculas";


export default class SeccionPruebas extends Component {
    holamundo(name) {
        let presentation = <h2>Hola, soy {name}</h2>;
        return presentation;
    }

    render() {
        return (
            <div>
                <section className="content">
                    <img src={logo} alt="logo" className="App-logo" />
                    <p>
                        Aprendiendo ReactJS
                    </p>

                    {this.holamundo('Will')}

                    <section className="componentes">
                        <MyComponent></MyComponent>
                        <Peliculas></Peliculas>
                    </section>

                </section>
            </div>
        )
    }
}
