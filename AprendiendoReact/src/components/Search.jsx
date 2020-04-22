import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articulos from './Articulos'

export default class Blog extends Component {

    state = {
        articles: {},
        status: 'error'
    }

    render() {
        let token = this.props.match.params.token
        return (
            <div id="blog">
                <Slider
                    titulo={"Resultados de la busqueda: " + token}
                    size="slider-small"></Slider>

                <div className="center">
                    <div className="content">
                        <Articulos
                            token={token}></Articulos>
                    </div>
                    <Sidebar
                        blog={true}
                    ></Sidebar>
                </div>
            </div >

        )
    }
}
