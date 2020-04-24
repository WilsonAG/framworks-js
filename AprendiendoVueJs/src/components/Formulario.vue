<template>
  <div class="general">
    <Slider title="Formulario" />
    <div class="center">
      <section class="content">
        <h2 class="subheader">Formulario</h2>
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
  name: "Formulario",
  components: {
    Sidebar,
    Slider
  }
};
</script>

<style>
</style>