<template>
  <section>
    <div id="list-articles" v-if="articles && articles.length > 0">
      <article
        class="article-item"
        id="article-item"
        v-for="article in articles"
        :key="article._id"
      >
        <div class="image-wrap">
          <img v-if="article.image" :src="uri+'image/'+article.image" :alt="article.title" />
          <img v-if="!article.image" src="../assets/logo.png" :alt="article.title" />
        </div>
        <router-link :to="{name: 'article', params: {id: article._id}}">
          <h2>{{article.title}}</h2>
        </router-link>
        <span class="date">{{article.date | moment('from', 'now')}}</span>
        <router-link :to="{name: 'article', params: {id: article._id}}">Leer mas</router-link>
        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length === 0">No hay articulos</div>
    <div v-else>Loading...</div>
  </section>
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