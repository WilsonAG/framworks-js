import React, { Component } from 'react'
import logo from "../assets/images/logo.svg";
import MyComponent from "./MyComponent.jsx";

export default class SeccionPruebas extends Component {
    contador = 0;

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contador: 0
    //     }
    // }

    state = {
        contador: 0
    }

    holamundo(name) {
        let presentation = <h2>Hola, soy {name}</h2>;
        return presentation;
    }

    sumar = () => {
        // this.contador++;
        // this.state.contador++;
        this.setState({
            contador: (this.state.contador + 1)
        })
    }

    restar = () => {
        // this.contador--;
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {
        return (
            <div>
                <section className="content">
                    <img src={logo} alt="logo" className="App-logo" />
                    <p>
                        Aprendiendo ReactJS
                    </p>

                    <h2 className="subheader">Funcione sy JSX basico</h2>
                    {this.holamundo('Will')}

                    <h2 className="subheader">Componentes</h2>
                    <section className="componentes">
                        <MyComponent></MyComponent>
                        <MyComponent></MyComponent>

                    </section>

                    <h2 className="subheader">Estado</h2>
                    <p>
                        Contador: {this.state.contador}
                    </p>

                    <input type="button" value="sumar" onClick={this.sumar} />
                    <input type="button" value="restar" onClick={this.restar} />

                </section>
            </div>
        )
    }
}
