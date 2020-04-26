<template>
  <div id="list-articles">
    <article class="article-item" id="article-item" v-for="article in articles" :key="article._id">
      <div class="image-wrap">
        <img v-if="article.image" :src="uri+'image/'+article.image" :alt="article.title" />
        <img v-if="!article.image" src="../assets/logo.png" :alt="article.title" />
      </div>
      <h2>{{article.title}}</h2>
      <span class="date">{{article.date}}</span>
      <a href="#">Leer mas</a>
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
import Global from "../global";

export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      uri: Global.uri
    };
  }
};
</script>

<style>
</style>