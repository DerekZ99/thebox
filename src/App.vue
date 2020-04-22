<template>
  <div id="app">
    <div v-if="$store.state.isHideVideo">
      <home-header-video v-show="$store.state.isShowVideo"></home-header-video>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "components/common/footer/Footer";
import HomeHeaderVideo from "./views/home/childComps/HomeHeaderVideo";
export default {
  name: "App",
  components: {
    HomeHeaderVideo,
    Footer
  }
};
</script>

<style>
#app {
  background: #333438;
}
@import "./assets/css/base.css";
@font-face {
  font-family: best;
  src: url("~assets/font/The-Best-Night-1.ttf");
}
@font-face {
  font-family: navbar;
  src: url("~assets/font/navbar.ttf");
}
@font-face {
  font-family: starter;
  src: url("~assets/font/starter.ttf");
}
</style>
