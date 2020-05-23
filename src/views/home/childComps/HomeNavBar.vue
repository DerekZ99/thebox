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
        :class="isShowTab?'animated slideInDown':'animated slideOutUp'"
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
      isShowTab: false,
      successCount: 0
    };
  },
  created() {
    let that = this;
    //这个事件由app.vue发过来,这里的操作是点击其他地方隐藏ipad size的导航栏
    this.$bus.$on("hiddenTab", () => { 
      if (that.isShowTab) {
        that.successCount++;
        if (that.successCount === 2) {
          that.menuClick();
          that.successCount = 0;
        }
      }
    });
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
  border-top: 1px solid #252526;
  border-bottom: 1px solid #252526;
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
.hidden-tab {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: #F8C087; */
  border: 1px solid #BD6438;
  border-radius: 25px;
  margin-bottom: 5px;
  padding: 5px;
}
</style>
