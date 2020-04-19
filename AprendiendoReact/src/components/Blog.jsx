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

        return (
            <div id="blog">
                <Slider
                    titulo="Blog"
                    size="slider-small"></Slider>

                <div className="center">
                    <div className="content">
                        {/* listado de articulos de la api */}
                        <Articulos></Articulos>

                    </div>
                    <Sidebar
                        blog={true}
                    ></Sidebar>
                </div>
            </div>

        )
    }
}
