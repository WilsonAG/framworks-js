<template>
  <div class="general">
    <Slider title="Pagina de pruebas" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">Página de pruebas</h2>
        <h3>{{id}}</h3>
        <button @click="actualizarNombre()">Actualizar Nombre</button>
        <p>{{nombre}}</p>
        <button @click="redirigirAlBlog()">Redirigir</button>
      </section>
      <Sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";

export default {
  name: "Pagina",
  components: {
    Sidebar,
    Slider
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log("¿montado");
  },
  created() {
    console.log("creado");
  },
  updated() {
    console.log("actualizado");
  },
  destroyed() {
    console.log("eliminado");
  },
  data() {
    return {
      id: null,
      nombre: "Will"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Will AG";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    }
  }
};
</script>

<style>
</style>