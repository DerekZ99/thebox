<template>
  <div class="home">
    <home-header-video></home-header-video>
    <home-nav-bar></home-nav-bar>
  </div>
</template>

<script>
import HomeHeaderVideo from "./childComps/HomeHeaderVideo";
import HomeNavBar from "./childComps/HomeNavBar";

export default {
  components: {
    HomeHeaderVideo,
    HomeNavBar
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-color: #333438;
}
</style>
