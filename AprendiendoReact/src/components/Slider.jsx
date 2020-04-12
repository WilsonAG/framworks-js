import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className="slider slider-big">
                <h1>{this.props.titulo}</h1>
                <a href="F" className="btn-white">{this.props.btn}</a>
            </div>
        )
    }
}
