import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';

export default class Sidebar extends Component {
    searchRef = React.createRef();

    state = {
        search: null,
        redirect: false
    }

    redirectoToSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/redirect/' + this.state.search}></Redirect>
            )
        }

        return (
            <aside className="sidebar">
                {
                    this.props.blog &&
                    <div className="nav-blog sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <Link to="/blog/crear" className="btn btn-success">
                            Crear Articulo
                        </Link>
                    </div>
                }

                <div className="search sidebar-item">
                    <h3>buscador</h3>
                    <p>Busca lo que gustes</p>
                    <form onSubmit={this.redirectoToSearch}>
                        <input type="text" name="search" ref={this.searchRef} />
                        <input type="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        )
    }
}
