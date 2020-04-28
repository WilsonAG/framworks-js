<template>
  <div class="general">
    <div class="center">
      <section class="content">
        <article class="article-item article-detail" id="article-item" v-if="article">
          <div class="image-wrap">
            <img v-if="article.image" :src="uri+'image/'+article.image" :alt="article.title" />
            <img v-if="!article.image" src="../assets/logo.png" :alt="article.title" />
          </div>
          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{article.date | moment('from', 'now')}}</span>
          <p>{{article.content}}</p>

          <div class="clearfix"></div>
          <router-link :to="'/editar/'+article._id" class="btn btn-warning">Editar</router-link>
          <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>
        </article>
      </section>
      <Sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Global from "../global";
import Axios from "axios";
import swal from "sweetalert";

export default {
  name: "Article",
  components: {
    Sidebar
  },
  data() {
    return {
      uri: Global.uri,
      article: null
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.getArticle(id);
  },
  methods: {
    getArticle(id) {
      Axios.get(this.uri + "article/" + id)
        .then(res => {
          if (res.data.status === "ok") {
            this.article = res.data.article;
          }
        })
        .catch(err => console.log(err.message));
    },
    deleteArticle(id) {
      swal({
        title: `¿Estas seguro que deseas eliminar ${this.article.title}?`,
        text: "una vez eliminado, no podras recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          Axios.delete(this.uri + "article/" + id)
            .then(res => {
              if (res.data.status === "ok") {
                swal("Poof! Tu articulo ha sido eliminado!", {
                  icon: "success"
                });
              }
              this.$router.push("/blog");
            })
            .catch();
        } else {
          swal("Tu articulo esta a salvo!");
        }
      });
    }
  }
};
</script>

<style>
</style>