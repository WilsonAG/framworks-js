<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar";
import Article from "../models/Article";
import Axios from "axios";
import Global from "../global";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      file: null,
      uri: Global.uri,
      article: new Article(null, null, null, null),
      submitted: false,
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
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
    save() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.invalid) {
        return false;
      }
      let articleId = this.$route.params.id;
      Axios.put(this.uri + "article/" + articleId, this.article)
        .then(res => {
          if (res.data.status === "ok") {
            if (this.file) {
              //Upload image
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);
              Axios.post(
                this.uri + "upload-image/" + res.data.article._id,
                formData
              )
                .then(res => {
                  if (res.data.status === "ok") {
                    swal(
                      "Articulo Modificado",
                      "El articulo fue editado correctamente",
                      "success"
                    );
                    this.article = res.data.article;
                    this.$router.push("/articulo/" + articleId);
                  } else {
                    //mostrar alerta
                    swal(
                      "Algo salio mal :(",
                      "No se ha guardado tu articulo",
                      "error"
                    );
                  }
                })
                .catch();
            } else {
              swal(
                "Articulo Modificado",
                "El articulo fue editado correctamente",
                "success"
              );
              this.$router.push("/articulo/" + articleId);
            }
          }
        })
        .catch();
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    }
  }
};
</script>

<style>
</style>