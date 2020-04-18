import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Slider
                    titulo="Maquetacion de ReactJs del Master de Frameworks de Js"
                    btn="Ver mas"
                    size="slider-big"
                />
                <div className="center">
                    <div className="content">
                        <h1 className="subheader">Ultimos Articulos</h1>
                    </div>

                    <Sidebar></Sidebar>
                </div>
            </div>
        )
    }
}
