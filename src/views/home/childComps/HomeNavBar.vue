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
        <home-nav-bar-item v-if="!$store.state.isIpadSize" path="/myself">自我介绍</home-nav-bar-item>
        <home-nav-bar-item v-if="!$store.state.isIpadSize" path="/work">技术分享</home-nav-bar-item>
        <home-nav-bar-item v-if="!$store.state.isIpadSize" path="/collection">我的收藏</home-nav-bar-item>

        <div @click="menuClick" v-if="$store.state.isIpadSize" class="list">
          <img src="~assets/tabbar/list.png" alt />
        </div>
      </div>
      <!-- -----------------隐藏的导航栏----------------- -->
      <div
        v-show="isShowTab"
        v-if="$store.state.isIpadSize"
        class="hidden-tab"
        :class="isShowTab?'animated slideInDown':''"
      >
        <home-nav-bar-item @click.native="menuClick" class="hidden-tab-item" path="/myself">关于我</home-nav-bar-item>
        <home-nav-bar-item @click.native="menuClick" class="hidden-tab-item" path="/work">技术分享</home-nav-bar-item>
        <home-nav-bar-item @click.native="menuClick" class="hidden-tab-item" path="/collection">我的收藏</home-nav-bar-item>
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
  data() {
    return {
      isShowTab: false
    };
  },
  methods: {
    jumpToHome() {
      this.$router.push("/home");
    },
    menuClick() {
      this.isShowTab = !this.isShowTab;
    }
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
/* 隐藏的导航栏样式↓ */
.list img {
  padding-left: 0.625rem;
  width: 2.1875rem;
  height: 2.1875rem;
  position: relative;
}
.nav-bar-item {
  position: absolute;
  top: 0px;
  width: 100px;
  height: 100px;
  z-index: 99;
  background-color: pink;
}
.hidden-tab {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
