<template>
  <div class="home animated slideInUp">
    <div class="content">
      <home-nav-bar v-if="$store.state.isShowFooter"></home-nav-bar>
      <home-box-animation></home-box-animation>
    </div>
  </div>
</template>

<script>
import HomeNavBar from "./childComps/HomeNavBar";
import HomeBoxAnimation from "./childComps/HomeBoxAnimation";

export default {
  components: {
    HomeNavBar,
    HomeBoxAnimation
  },
  methods: {
    getCurPath(path) {
      this.$store.commit("changeCurPath", path);
    }
  },
  activated() {
    const path = this.$route.path;
    this.getCurPath(path);
  }
};
</script>

<style scoped>
.home {
  background: url("~assets/boxImg/code2.jpg") no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-top: 0;
  height: 60vh;
}
.content {
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  overflow: auto;
}
@media screen and (max-width: 479px) {
  .home {
    line-height: 1.5625rem;
  }
}
</style>
