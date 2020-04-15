<template>
  <div class="header">
    <video
      v-if="isCloseVideo"
      class="video"
      src="~assets/headVideos/1.congradulation.mp4"
      autoplay
      :muted="!isMuted"
      loop
    ></video>
    <!-- logo文字 -->
    <h1 class="title" @mouseenter="mouseOn" @mouseleave="mouseOn">
      <div class="main-title"
        :class="isShowCloseBox?'animated flash':''">the box</div>
      <!-- 关闭窗口 -->
      <transition
        enter-active-class="animated fadeInUp fast"
        leave-active-class="animated fadeOutDown fast"
      >
        <div v-show="isShowCloseBox" class="clost-box">
          已{{ isCloseVideo ? "开启" : "关闭" }}背景视频
          <el-switch v-model="isCloseVideo" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </transition>
      <!-- 关闭音乐窗口 -->
      <transition
        enter-active-class="animated fadeInUp fast"
        leave-active-class="animated fadeOutDown fast"
      >
        <div v-show="isShowCloseBox" class="muted-box">
          已{{isMuted?"开启":"关闭"}}背景音乐
          <el-switch v-model="isMuted" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </transition>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowCloseBox: false,
      isCloseVideo: true,
      isMuted: false
    };
  },
  methods: {
    mouseOn() {
      this.isShowCloseBox = !this.isShowCloseBox;
    }
  }
};
</script>

<style scoped>
.header {
  height: 30vh;
  overflow: hidden;
  position: relative;
}
.header video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.title {
  position: relative;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
}
.main-title {
  position: absolute;
  color: lightpink;
  font-size: 70px;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  font-family: best;
}

.clost-box,
.muted-box {
  position: absolute;
  color: #ffffff;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 10px;
  position: absolute;
  right: 0;

  background-color: #666;
}
.clost-box {
  bottom: 0;
}
.muted-box {
  bottom: 35px;
}
</style>
