<template>
  <div class="content">
    <h1 class="subheader">{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Soy el subtitulo de mi componente"
    };
  }
};
</script>