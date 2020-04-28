<template>
  <h1>Redirigiendo...</h1>
</template>

<script>
export default {
  name: "Redirect",
  mounted() {
    let searchToken = this.$route.params.token;
    this.$router.push("/buscar/" + searchToken);
  }
};
</script>

<style>
</style>