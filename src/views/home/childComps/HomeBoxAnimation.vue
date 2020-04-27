<template>
  <el-row class="row">
    <el-col class="animation-area animated slideInUp delay-1s" ref="col" :span="$store.state.isShowFooter ?16:20 " :offset="$store.state.isShowFooter ?4:2 ">
      <p class="intro">Hi!欢迎来到我的博客，The Box。我会在这里分享一些我制作网站的技术与技巧。这里还有关于我的介绍以及我收藏的一些图片与音乐。</p>
      <p class="intro">
        本站github地址:
        <a
          class="link"
          href="https://github.com/DerekZ99/thebox"
        >https://github.com/DerekZ99/thebox</a>
      </p>
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
.link {
  color: lightblue;
}
.row {
  overflow: hidden;
}
@media screen and (max-width: 479px) {
  .intro {
    padding-top: 5px;  
  }
  .animation-area {
    height: 57vh;
  }
}
</style>