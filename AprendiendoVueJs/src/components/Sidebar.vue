<template>
  <aside class="sidebar">
    <div class="nav-blog sidebar-item">
      <h3>Puedes hacer esto</h3>
      <router-link to="/crear-articulo" class="btn btn-success">Crear articulo</router-link>
    </div>
    <div class="search sidebar-item">
      <h3>buscador</h3>
      <p>Busca lo que gustes</p>
      <form @submit.prevent="goSearch">
        <input type="text" name="search" v-model="searchToken" />
        <input type="submit" value="Buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      searchToken: null
    };
  },
  methods: {
    goSearch() {
      this.$router.push("/redirigir/" + this.searchToken);
      //   console.log(this.searchToken);
    }
  }
};
</script>