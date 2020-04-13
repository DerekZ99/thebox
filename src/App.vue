<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer v-if="isShowFooter"></Footer>
  </div>
</template>

<script>
import Footer from "components/common/footer/Footer";
export default {
  name: "App",
  components: {
    Footer
  },
  data() {
    return {
      isShowFooter: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShowFooter = !this.isShowFooter;
    }, 6000);
  }
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
