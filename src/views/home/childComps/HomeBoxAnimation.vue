<template>
  <el-row class="row">
    <el-col class="animation-area animated slideInUp delay-1s" ref="col" :span="16" :offset="4">
      <p class="intro">Hi!欢迎来到我的博客，The Box。</p>
      <p class="intro">我会在这里分享一些我制作网站的技术与技巧。这里还有关于我的介绍以及我收藏的一些图片与音乐。</p>
      <home-my-info></home-my-info>
    </el-col>
  </el-row>
</template>

<script>
import HomeMyInfo from "./HomeMyInfo";
export default {
  components: {
    HomeMyInfo
  },
  data() {
    return {
      isShowAnimation: false
    };
  },
  methods: {
    mouseOn() {
      this.isShowAnimation = !this.isShowAnimation;
    }
  }
};
</script>

<style scoped>


.intro {
  color: #ffffff;
  padding-top: 20px;
  font-size: 14px;
}

@media screen and (max-width: 479px) {
  .animation-area {
    height: 57vh;
  }
}
</style>