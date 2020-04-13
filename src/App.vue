<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  background-color: #333438;
}
@import "./assets/css/base.css";
@font-face {
  font-family: best;
  src: url("~assets/font/The-Best-Night-1.ttf");
}
</style>
