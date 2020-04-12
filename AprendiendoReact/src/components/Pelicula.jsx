import React, { Component } from 'react'

export default class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula, this.props.index);
    }

    render() {
        const { titulo, image } = this.props.pelicula
        return (
            <div id="pelicula">
                <article className="article-item" id="article-item">
                    <div className="image-wrap">
                        <img src={image} alt={titulo} />
                    </div>
                    <h2>{titulo}</h2>
                    <span className="date">Hace 5 minutos</span>
                    <a href="d">Leer mas</a>
                    <button
                        onClick={this.marcar}
                    >
                        Marcar como favorita
                    </button>
                    <div className="clearfix"></div>
                </article>
            </div>
        )
    }
}
