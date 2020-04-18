import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                {
                    this.props.blog &&
                    <div className="nav-blog sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="f" className="btn btn-success">Crear articulo</a>
                    </div>
                }

                <div className="search sidebar-item">
                    <h3>buscador</h3>
                    <p>Busca lo que gustes</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        )
    }
}
