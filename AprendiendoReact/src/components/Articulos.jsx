import React, { Component } from 'react'
import Axios from 'axios'

export default class Articulos extends Component {

    state = {
        articles: [],
        status: null
    }

    getArticles = () => {
        Axios.get('http://localhost:3000/api/articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'ok'
                })
                console.log(this.state);
            })
    }

    componentWillMount() {
        this.getArticles()
    }

    render() {
        let articles = this.state.articles
        if (articles && articles.length > 0) {
            let articlesList = articles.map(article => {
                return (

                    <article className="article-item" id="article-item" key={article._id}>
                        <div className="image-wrap">
                            <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg" alt={article.title} />
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">{article.date}</span>
                        <a href="1">Leer mas</a>
                        <div className="clearfix"></div>
                    </article>

                )
            })
            return (
                <div id='aticles'>
                    <h2 className="subheader">Listado de articulos</h2>
                    {articlesList}
                </div>
            )

        } else if (articles.length === 0 && this.state.status === 'ok') {
            return (
                <div id='aticles'>
                    <h2 className="subheader">No hay articulos para mostrar.</h2>
                    <p>Aun no hay temas</p>
                </div>
            )

        } else {
            return (
                <div id='aticles'>
                    <h2 className="subheader">Loading...</h2>
                    <p>Cargando temas</p>
                </div>
            )

        }
    }
}

