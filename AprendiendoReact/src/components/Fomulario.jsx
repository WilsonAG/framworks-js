import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'

export default class Fomulario extends Component {
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirForm = (e) => {
        e.preventDefault()
        let genero = '';
        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value

        } else if (this.generoOtroRef.current.checked) {
            genero = this.generoOtroRef.current.value
        }

        let user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero
        }
        console.log(user);
        this.setState({
            user: user
        })
    }

    render() {
        let user = this.state.user
        return (
            <div id="formulario">
                <Slider
                    titulo="Formulario"
                    size="slider-small"></Slider>

                <div className="center">
                    <div className="content">
                        <h2 className="subheader"> Completa los datos .</h2>
                        {/* Datos del formulario  */}
                        {this.state.user.nombre &&
                            <div>
                                <p> Nombre: <strong>{user.nombre}</strong></p>
                                <p> Apellidos: <strong>{user.apellidos}</strong></p>
                                <p> bio: <strong>{user.bio}</strong></p>
                                <p> genero: <strong>{user.genero}</strong></p>
                            </div>

                        }
                        {/* Formulario */}
                        <form className="mid-form" onSubmit={this.recibirForm} onChange={this.recibirForm}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre: </label>
                                <input type="text" name="name" id="name" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Apellido: </label>
                                <input type="text" name="lastname" id="lastname" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group radio">
                                <label htmlFor="name">Biografia: </label>
                                <textarea name="bio" id="" cols="30" rows="10" ref={this.bioRef} ></textarea>
                            </div>
                            <div className="form-group radio">
                                <input type="radio" name="genre" value="hombre" ref={this.generoHombreRef} /> Hombre
                                <input type="radio" name="genre" value="mujer" ref={this.generoMujerRef} /> Mujer
                                <input type="radio" name="genre" value="otro" ref={this.generoOtroRef} /> Otro
                            </div>
                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>

                    </div>
                    <Sidebar
                        blog={false}
                    ></Sidebar>
                </div>
            </div >
        )
    }
}
