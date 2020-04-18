import React, { Component } from 'react'
import Logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

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
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/segunda-ruta" activeClassName="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pag-1" activeClassName="active">Pagina 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/Will/AG" activeClassName="active">Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="clearfix"></div>
            </header>
        )
    }
}


