<template>
  <div :class="{
      'slider slider-big': home,
      'slider slider-small': !home
  }">
    <h1>{{title}}</h1>
    <router-link to="/blog" class="btn-white" v-if="home">Ir al blog</router-link>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["title", "home"]
};
</script>