<template>
  <article class="article-item">
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
    <input type="button" value="Marcar como Favorito" @click="pasarFavoritaAlPadre(pelicula)" />
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ["pelicula"],
  methods: {
    pasarFavoritaAlPadre(pelicula) {
      //   console.log(pelicula);
      this.$emit("favorita", pelicula);
    }
  }
};
</script>

<style>
</style>