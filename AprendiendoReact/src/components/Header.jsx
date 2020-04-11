import React, { Component } from 'react'
import Logo from '../assets/images/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="center">

                    <div className="logo">
                        <img src={Logo} alt="Logo de la web" className="app-logo" />
                        <div className="brand">
                            <strong>Curso</strong>ReactJS
                            </div>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="form.html">Formulario</a>
                            </li>
                            <li>
                                <a href="dd">Pagina 1</a>
                            </li>
                            <li>
                                <a href="dd">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="clearfix"></div>
            </header>
        )
    }
}


