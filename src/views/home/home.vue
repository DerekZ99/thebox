<template>
  <div :class="{home:!showAnimation}">
    <starter-animation class="animated slideOutUp delay-5s" v-if="showAnimation"></starter-animation>
    <div v-else class="animated slideInUp">
      <home-header-video></home-header-video>
      <home-nav-bar></home-nav-bar>
      <home-box-animation></home-box-animation>
    </div>
  </div>
</template>

<script>
import HomeHeaderVideo from "./childComps/HomeHeaderVideo";
import HomeNavBar from "./childComps/HomeNavBar";
import HomeBoxAnimation from "./childComps/HomeBoxAnimation";
import StarterAnimation from "components/content/starterAnimation/StarterAnimation";

export default {
  components: {
    HomeHeaderVideo,
    HomeNavBar,
    HomeBoxAnimation,
    StarterAnimation
  },
  data() {
    return {
      showAnimation: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showAnimation = !this.showAnimation;
    }, 6000);
  }
};
</script>

<style scoped>
.home {
  overflow: hidden;
  height: 90vh;
  background-color: #333438;
}
</style>
