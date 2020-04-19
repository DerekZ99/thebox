<template>
  <div :class="{home:!showAnimation}">
    <starter-animation @BtnClicked="starterClick" v-if="showAnimation"></starter-animation>
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
  methods: {
    starterClick() {
      this.showAnimation = !this.showAnimation;
    }
  },
  data() {
    return {
      showAnimation: true
    };
  }
};
</script>

<style scoped>
.home {
  overflow: hidden;
  background:rgba(0, 0, 0, .8);
}

</style>
