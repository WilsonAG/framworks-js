import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articulos from "./Articulos";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Slider
                    titulo="Maquetacion de ReactJs del Master de Frameworks "
                    btn="Ver mas"
                    size="slider-big"
                />
                <div className="center">
                    <div className="content">
                        <h1 className="subheader">Ultimos Articulos</h1>
                        <Articulos
                            Home={true}></Articulos>
                    </div>

                    <Sidebar></Sidebar>
                </div>
            </div>
        )
    }
}
