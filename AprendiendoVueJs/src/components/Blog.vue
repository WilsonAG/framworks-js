<template>
  <div class="general">
    <Slider title="Blog" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles" v-if="articles.length > 0"></div>
        <Articles :articles="articles" />
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
  name: "Blog",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      Axios.get(Global.uri + "articles").then(res => {
        if (res.data.status === "ok") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    }
  },
  data() {
    return {
      articles: []
    };
  }
};
</script>

<style>
</style>