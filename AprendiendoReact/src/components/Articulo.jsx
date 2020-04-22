import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { Global } from '../global'
import defaultImgae from '../assets/images/default-image.jpg'
import Axios from 'axios'
import Moment from "react-moment";
import 'moment/locale/es'
import { Redirect, Link } from 'react-router-dom'
import swal from 'sweetalert'

export default class Articulo extends Component {

    uri = Global.url

    state = {
        article: null,
        status: null
    }

    getArticle = () => {
        let id = this.props.match.params.id
        Axios.get(this.uri + '/article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'ok'
                })
            })
            .catch(err => { })
    }

    componentDidMount() {
        this.getArticle()
    }

    deleteArticle = id => {

        swal({
            title: "¿Estas seguro que deseas eliminar ?",
            text: "Una vez eliminado, No podras recuperarlo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Listo! tu artuculo ha sido eliminado!", {
                        icon: "success",
                    });

                    Axios.delete(this.uri + '/article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            })
                            swal(
                                'Articulo borrado',
                                'El articulo se ha borrado',
                                'success'
                            )
                        })

                } else {
                    swal("Tu articulo esta a salvo :)!");
                }
            });

    }

    render() {
        if (this.state.status === 'deleted') {
            return <Redirect to="/blog"></Redirect>
        }
        let article = this.state.article
        return (
            <div className="center">
                <section className="content">

                    {this.state.article &&
                        <article className="article-item article-detail" id="article-item">
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
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            {
                                /* Botones */
                                <div className="">
                                    <button
                                        onClick={
                                            () => this.deleteArticle(article._id)
                                        }
                                        className="btn btn-danger">Borrar</button>
                                    <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>
                                </div>
                            }
                            <div className="clearfix"></div>

                        </article>
                    }

                    {
                        !article &&
                        <div id="article">
                            <h2 className="subheader">
                                El articulo no existe
                        </h2>
                            <p>Intentalo mas tarde</p>
                        </div>
                    }
                </section>
                <Sidebar></Sidebar>
            </div>
        )
    }
}
