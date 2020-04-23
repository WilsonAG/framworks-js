<template>
  <section class="content">
    <h2 class="subheader">Peliculas</h2>
    <!-- listado de articulos -->
    <div id="articles">
      <article class="article-item" v-for="pelicula in peliculas" :key="pelicula">
        <div class="image-wrap">
          <img :src="pelicula.image" :alt="pelicula.title" />
        </div>
        <h2>{{pelicula.title}}</h2>
        <span
          class="date"
          :class="{
            'year-green': pelicula.year <= 2020,
            'year-red': pelicula.year > 2020
            }"
        >{{pelicula.year}}</span>
        <div class="clearfix"></div>
      </article>
      {{peliculas[0].title}}
    </div>
  </section>
</template>

<script>
export default {
  name: "Peliculas",
  data() {
    return {
      peliculas: [
        {
          title: "Batman v Sups",
          year: 2017,
          image:
            "https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"
        },
        {
          title: "Venom 2",
          year: 2021,
          image:
            "https://i.pinimg.com/originals/a2/63/e6/a263e6a569f47756a6885dafe8b4d452.jpg"
        },
        {
          title: "Frozen",
          year: 2015,
          image:
            "https://e.an.amtv.pe/espectaculos-gana-entradas-show-frozen-aventura-congelada-n169131-612x408-149567.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>