<template>
  <div id="app">
    <tab-title v-if="!$store.state.isShowFooter && isShowTab"></tab-title>
    <div v-if="$store.state.isHideVideo">
      <home-header-video class="pushDown" v-show="$store.state.isShowVideo"></home-header-video>
    </div>
    <keep-alive>
      <router-view :class="{pushDown:isShowTab}"></router-view>
    </keep-alive>

    <Footer v-if="$store.state.isShowFooter || $store.state.curPath == '/starter'"></Footer>
    <main-tab-bar v-else></main-tab-bar>
  </div>
</template>

<script>
import Footer from "components/common/footer/Footer";
import HomeHeaderVideo from "./views/home/childComps/HomeHeaderVideo";
import MainTabBar from "components/common/MainTabBar/MainTabBar";
import TabTitle from "components/common/tabTitle/TabTitle";
export default {
  name: "App",
  components: {
    HomeHeaderVideo,
    Footer,
    MainTabBar,
    TabTitle
  },
  data() {
    return {
      isShowTab: false
    };
  },
  created() {
    this.getWinWidth();
  },
  mounted() {
    let that = this;
    this.$bus.$on("enterClick", () => {
      //由starter发过来
      that.isShowTab = !that.isShowTab;
    });
    window.onresize = () => {
      return (() => {
        this.getWinWidth();
      })();
    };
  },
  methods: {
    getWinWidth() {
      this.$store.commit("showFooter", document.body.clientWidth);
    }
  }
};
</script>
<style>
@media screen and (max-width: 479px) {
  .pushDown {
    margin-top: 40px;
  }
  
}
#app {
  background: url("~assets/boxImg/otherBg.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
i{
  color: red
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
