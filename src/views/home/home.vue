<template>
  <div class="animated slideInUp">
    <home-nav-bar></home-nav-bar>
    <home-box-animation></home-box-animation>
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
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
}
</style>
