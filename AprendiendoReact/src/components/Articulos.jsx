import React, { Component } from 'react'
import Axios from 'axios'
import { Global } from '../global';
import defaultImgae from '../assets/images/default-image.jpg'
import Moment from "react-moment";
import 'moment/locale/es'
import { Link } from "react-router-dom";

export default class Articulos extends Component {

    uri = Global.url;

    state = {
        articles: [],
        status: null
    }

    getArticles = () => {
        Axios.get(`${this.uri}/articles`)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'ok'
                })
                console.log(this.state);
            })
    }

    getSearchedArticles = token => {
        Axios.get(`${this.uri}/search/${token}`)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'ok'
                })
                console.log(this.state);
            })
            .catch(err => {
                this.setState({
                    articles: [],
                    status: 'error'
                })
            })
    }

    getLastArticles = () => {
        Axios.get(`${this.uri}/articles/5`)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'ok'
                })
                console.log(this.state);
            })
    }

    componentDidMount() {
        let home = this.props.home
        let search = this.props.token

        if (home) {
            this.getLastArticles()
        } else if (search) {
            this.getSearchedArticles(search)
        } else {
            this.getArticles()
        }
    }

    render() {
        let articles = this.state.articles
        if (articles && articles.length > 0) {
            let articlesList = articles.map(article => {
                return (

                    <article className="article-item" id="article-item" key={article._id}>
                        <div className="image-wrap">
                            {
                                article.image ?
                                    (
                                        <img
                                            src={this.uri + '/image/' + article.image}
                                            alt={article.title} />
                                    ) : (
                                        <img
                                            src={defaultImgae}
                                            alt={article.title} />

                                    )
                            }
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                        </span>
                        <Link to={"/blog/articulo/" + article._id}>Leer mas</Link>
                        <div className="clearfix"></div>
                    </article>

                )
            })
            return (
                <div id='aticles'>
                    {articlesList}
                </div>
            )

        } else if (articles.length === 0) {
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

