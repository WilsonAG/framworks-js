import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'

export default class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    titulo="Blog"
                    size="slider-small"></Slider>

                <div className="center">
                    <div className="content">
                        {/* listado de articulos de la api */}
                    </div>
                    <Sidebar
                        blog={true}
                    ></Sidebar>
                </div>
            </div>

        )
    }
}
