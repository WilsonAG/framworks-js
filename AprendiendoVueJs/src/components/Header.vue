<template>
  <header class="header">
    <div class="center">
      <!-- logo -->
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo de la web" class="app-logo" />
        <div class="brand">
          <strong>Curso</strong>Vue
        </div>
      </div>
      <!-- menu -->

      <nav class="menu">
        <ul>
          <li>
            <router-link active-class="active" to="/home">Inicio</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/formulario">Formulario</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/pagina/hola gg">Pagina 1</router-link>
          </li>
          <li>
            <router-link
              :to="{name: 'pagina', params: {id: 'valor del parametro desde url'}}"
            >Pagina 2</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- limpiar flotantes -->
    <div class="clearfix"></div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style >
/* .active {
  color: var(--vue-color) !important;
  background: red;
} */
</style>