<template>
  <div class="general">
    <div class="center">
      <section class="content">
        <h2 class="subheader">Peliculas</h2>
        <!-- listado de articulos -->
        <p v-if="favorita">
          Tu pelicula favorita es:
          {{favorita.title}}
        </p>
        <div id="articles">
          <div class v-for="pelicula in peliculas" :key="pelicula.title">
            <Pelicula :pelicula="pelicula" @favorita="recibirFavorita" />
          </div>
        </div>
      </section>
      <Sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    recibirFavorita(pelicula) {
      console.log(pelicula);
      this.favorita = pelicula;
    }
  },
  data() {
    return {
      favorita: null,
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