<template>
  <div id="app">
    <HeaderComponent />
    <SliderComponent />
    <div class="center">
      <!-- <LastArticles /> -->
      <router-view></router-view>
      <SidebarComponent />
    </div>
    <div class="clearfix"></div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import SliderComponent from "./components/Slider.vue";
import SidebarComponent from "./components/Sidebar.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import "./assets/css/styles.css";
</style>
