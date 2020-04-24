<template>
  <div class="general">
    <Slider title="Curso de VueJS" home="true" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">ultimos articulos</h2>
        <!-- listado de articulos -->
        <div id="articles">
          <article class="article-item" id="article-item">
            <div class="image-wrap">
              <img
                src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg"
              />
            </div>
            <h2>Articulo de prueba</h2>
            <span class="date">Hace 5 minutos</span>
            <a href="#">Leer mas</a>
            <div class="clearfix"></div>
          </article>
        </div>
      </section>
      <Sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

export default {
  name: "LastArticles",
  components: {
    Sidebar,
    Slider
  }
};
</script>