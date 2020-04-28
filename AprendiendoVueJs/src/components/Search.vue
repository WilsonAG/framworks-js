<template>
  <div class="general">
    <Slider :title="'Busqueda: '+searchToken" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">Articulos encontrados</h2>
        <div id="articles" v-if="articles.length > 0">
          <Articles :articles="articles" />
        </div>
        <div v-else>
          <h2>No hay articulos que coincidan con tu busqueda</h2>
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
import Articles from "./Articles.vue";
import Axios from "axios";
import Global from "../global";

export default {
  name: "Search",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  mounted() {
    this.searchToken = this.$route.params.token;
    this.getArticlesBySearch(this.searchToken);
  },
  methods: {
    getArticlesBySearch(token) {
      Axios.get(Global.uri + "search/" + token)
        .then(res => {
          if (res.data.status === "ok") {
            this.articles = res.data.articles;
          }
          console.log(this.articles);
        })
        .catch(err => console.log(err.message));
    }
  },
  data() {
    return {
      searchToken: null,
      articles: []
    };
  }
};
</script>

<style>
</style>