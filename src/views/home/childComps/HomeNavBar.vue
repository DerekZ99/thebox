<template>
  <el-row class="el-row">
    <!-- 中间内容 -->
    <el-col :span="16" :offset="4">
      <h1>
        <a href="javascript:;" @click="jumpToHome">
          <div class="nav-bar-logo animated bounceIn delay-1s">the box</div>
        </a>
      </h1>
      <div class="nav-bar-bg animated bounceInRight delay-1s">
        <slot></slot>
        <home-nav-bar-item path="/myself">关于我</home-nav-bar-item>
        <home-nav-bar-item path="/work">关于本页</home-nav-bar-item>
        <home-nav-bar-item path="/collection">我的收藏</home-nav-bar-item>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import HomeNavBarItem from "./HomeNavBarItem";

export default {
  components: {
    HomeNavBarItem
  },

  methods: {
    jumpToHome() {
      this.$router.push("/home");
    },
  }
};
</script>

<style scoped>
.el-row {
  background-color: #1d1a1a;
  overflow: hidden;
}
.nav-bar-bg {
  display: flex;
  height: 40px;
  padding: 5px;
  justify-content: flex-end;
}
.nav-bar-logo {
  color: #ffffff;
  font-size: 40px;
  float: left;
  font-family: best;
  background-color: #1e1e1e;
  clear: both;
}

</style>
