<template>
  <div class="general">
    <Slider title="Curso de VueJS" home="true" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">ultimos articulos</h2>
        <!-- listado de articulos -->
        <Articles :articles="articles" />
        <div id="articles"></div>
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
  name: "LastArticles",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  methods: {
    getLastArticles() {
      Axios.get(Global.uri + "articles/3").then(res => {
        if (res.data.status === "ok") {
          this.articles = res.data.articles;
        }

        console.log(this.articles);
      });
    }
  },
  data() {
    return {
      articles: null
    };
  }
};
</script>