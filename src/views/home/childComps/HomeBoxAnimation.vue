<template>
  <div>
    <el-row>
      <el-col class="animation-area animated slideInUp delay-1s" ref="col" :span="16" :offset="4">
        <p class="intro">Hi!欢迎来到我的博客，The Box。</p>
        <p
          class="intro"
        >在这里，你将会看到这个页面的制作过程，关于我的点点滴滴，以及我收藏的一些好看的图片，希望你会喜欢上这个网站。So,let's enjoy the party!</p>
        <p class="intro">对了，我还要在这里致敬一下我男神，Vue.js的作者——尤雨溪（Evan You）</p>
        <img 
          @mouseenter="mouseOn" @mouseleave="mouseOn"
          :class="isShowAnimation? 'animated pulse':''"
          class="evan-img"
          src="~assets/vue/evan.jpg"
          title="尤大大"
          alt
        />
      </el-col>
    </el-row>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAnimation:false
    };
  },
  mounted() {},

  methods: {
    mouseOn(){
      this.isShowAnimation = !this.isShowAnimation
    }
  }
};
</script>

<style scoped>
.animation-area {
  height: 100%;
}
.intro {
  color: #ffffff;
  padding-top: 20px;
  font-size: 14px;
}
.evan-img {
  display: block;
  height: 30vh;
  margin: 20px auto;
}
</style>