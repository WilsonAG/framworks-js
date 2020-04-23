<template>
  <div class>
    <h1>Este es mi componenete</h1>
    <h2>{{subtitulo}}</h2>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente"
    };
  }
};
</script>