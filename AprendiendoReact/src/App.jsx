import React from "react";
import "./assets/css/App.css";

// My components    
import './components/MyComponent'
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import { Footer } from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";


function App() {
    return (
        <div className="App">
            <Header />
            <Slider></Slider>
            <div className="center">
                <section className="content">

                    <SeccionPruebas></SeccionPruebas>
                    {/*}
                    <h2 className="subheader">ultimos articulos</h2>
                    <div id="articles">
                        <article className="article-item" id="article-item">
                            <div className="image-wrap">
                                <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg" alt="imagen de prueba" />
                            </div>
                            <h2>Articulo de prueba</h2>
                            <span className="date">Hace 5 minutos</span>
                            <a href="s">Leer mas</a>
                            <div className="clearfix"></div>
                        </article>
                    </div>
    {*/}

                </section>
                <Sidebar></Sidebar>
                <div class="clearfix"></div>
                <Footer></Footer>
            </div>
        </div>

    );
}

export default App;
