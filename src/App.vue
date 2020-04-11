<template>
  <div id="app">
    <!-- <transition v-if="showAnimation">
      <starter-animation></starter-animation>
    </transition> -->

    <transition enter-active-class="animated slideInUp">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import StarterAnimation from "components/content/starterAnimation/StarterAnimation";

export default {
  name: "App",
  components: {
    StarterAnimation
  },
  data() {
    return {
      showAnimation: true
    };
  },
  created() {
    setTimeout(() => {
      this.showAnimation = !this.showAnimation;
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
