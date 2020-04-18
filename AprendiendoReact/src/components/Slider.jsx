import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className={'slider ' + this.props.size}>
                <h1>{this.props.titulo}</h1>
                {
                    this.props.btn &&
                    <a href="F" className="btn-white">{this.props.btn}</a>
                }
            </div>
        )
    }
}
