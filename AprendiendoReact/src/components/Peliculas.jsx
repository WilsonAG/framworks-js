import React, { Component } from 'react'
import './MensajeEstatico'
import Pelicula from './Pelicula'

class Peliculas extends Component {

    state = {
        peliculas: [
            {
                titulo: 'Batman v superman',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QAH09f5lB9OPjTnelohvNq2BQbbcHTJYsTnITl0L1b4MzdVq'
            },
            {
                titulo: 'avengers age of ultron',
                image: 'https://s3.cine3.com/2015/02/Avengers-AOU2.jpg'
            }
        ],
        nombre: 'Wilson Aguilar',
        favorita: {}
    }

    cambiarTitulo = () => {
        let { peliculas } = this.state;
        // let rnd = Math.floor(Math.random() * 2);
        peliculas[0].titulo = 'BatmanVSups'

        this.setState({
            peliculas
        });
    }

    favorita = (pelicula, i) => {
        console.log('favorito seleccionado', pelicula, i);
        this.setState({
            favorita: pelicula
        })
    }

    render() {
        return (
            <div className="content peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de peliculas favoritas de {this.state.nombre}</p>
                <div className="">
                    <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
                </div>
                {
                    this.state.favorita.titulo ? (
                        <p className="favorita">
                            La pelicula favorita es : <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                            <p>No hay Pelicula favorita</p>
                        )
                }

                {/* Componente de pelicula */}
                {
                    this.state.peliculas.map((pelicula, i) => {

                        return (
                            <Pelicula
                                key={i}
                                pelicula={pelicula}
                                marcarFavorita={this.favorita}
                                index={i}
                            />
                        )
                    })
                }
            </div>

        )
    }
}

export default Peliculas;