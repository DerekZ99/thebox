<template>
  <el-row>
    <el-col :span="4">
      <div class="nav-bar-bg"></div>
    </el-col>
    <!-- 中间内容 -->
    <el-col :span="16">
      <div class="nav-bar-logo animated bounceIn delay-1s">the box</div>
      <div class="nav-bar-bg">
        <div
          class="about-me animated bounceInRight delay-1s"
          v-for="item in navBarInfo"
          :key="item.id"
        >
          {{item.text}}
          <span class="about-me-img">
            <img src="~assets/rapImg/14.jpg" alt />
          </span>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="nav-bar-bg"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      navBarInfo: [
        {
          id: 1,
          text: "我的收藏"
        },
        {
          id: 2,
          text: "关于我"
        },
        {
          id: 3,
          text: "本页的制作"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.nav-bar-bg {
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 5px;
  background-color: #2b2c30;
  flex-direction: row-reverse;
}
.about-me {
  background-color: #bdb29c;
  height: 100%;
  font-size: 14px;
  margin: 0 5px;
  border-radius: 30px;
  overflow: hidden;
  padding: 0 10px;
  font-weight: 700;
}
.about-me:hover {
  cursor: pointer;
}
.about-me-img {
  height: 100%;
  float: right;
}
.about-me-img img {
  height: 100%;
}
.nav-bar-logo {
  color: #ffffff;
  font-size: 40px;
  height: 60px;
  line-height: 60px;
  float: left;
  font-family: best;
  background-color: #2b2c30;
  clear: both;
}
</style>
