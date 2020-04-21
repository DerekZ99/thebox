<template>
  <div class="myself animated bounceInUp">
    <home-nav-bar></home-nav-bar>
    <el-row class="row">
      <el-col :span="16" :offset="4">
        <p class="intro">Hi,我们又见面了，那接下来我就来介绍一下我自己。</p>
        <Canada @imgClicked="imgClick"></Canada>
        <Skill></Skill>
      </el-col>
    </el-row>
    <div v-show="isShowMask" @click="showMask" class="mask">
      <img class="maskImg" :src="imgItem.img" :title="imgItem.title">
    </div>
  </div>
</template>

<script>
import HomeNavBar from "../home/childComps/HomeNavBar";
import Canada from "./childComps/Canada";
import Skill from "./childComps/Skill";

export default {
  components: {
    HomeNavBar,
    Canada,
    Skill
  },
  data() {
    return {
      imgItem: "",
      isShowMask:false
    };
  },
  methods: {
    imgClick(item) {
      this.imgItem = item;
      console.log(this.imgItem);
      this.isShowMask = !this.isShowMask
    },
    showMask(){
      this.isShowMask = !this.isShowMask
    }
  }
};
</script>

<style scoped>
.myself {
  margin-bottom: 10vh;
  background: url("~assets/boxImg/otherBg.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.row {
  background: rgba(0, 0, 0, 0.5);
}
.intro {
  margin: 20px 0;
  color: aliceblue;
  font-size: 14px;
}
.mask{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.maskImg{
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  height:  80vh;
}
</style>