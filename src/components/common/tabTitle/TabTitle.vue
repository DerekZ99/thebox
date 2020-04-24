<template>
  <div class="tab-title">
    <div class="title-item"></div>
    <div class="title-item">
      <img v-show="$store.state.curPath == '/home'" src="~assets/rapImg/5.jpg" alt="">
      <p v-show="$store.state.curPath !== '/home'">the box</p>
    </div>
    <div class="title-item">
      <music-switch v-show="isShowSwitch"></music-switch>
    </div>
  </div>
</template>

<script>
import MusicSwitch from "components/content/musicSwitch/MusicSwitch"
export default {
  components:{
    MusicSwitch
  },
  computed:{
    isShowSwitch(){
      const path = this.$store.state.curPath
      if (path == '/work' || path =='/myself'){
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<style scoped>
.tab-title {
  height: 2.5rem;
  width: 100%;
  background-color: #424242;
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
}
.title-item{
  flex: 1;
  text-align: center;
  font-family: best;
  font-size: 2.1875rem;
  color: #8DC149;
}
.title-item img {
  height: 2.5rem;
}
</style>