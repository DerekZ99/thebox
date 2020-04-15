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
        <div
          @mouseenter="mouseOn(index)"
          @mouseleave="curIndex = 4"
          @click="tabClick(item.path)"
          :class="curIndex === index?'animated jello': ''"
          class="about-me"
          v-for="(item, index) in navBarInfo"
          :key="item.id"
        >
          {{item.text}}
          <span class="about-me-img">
            <img src="~assets/rapImg/14.jpg" alt />
          </span>
        </div>
      </div>
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
          text: "我的收藏",
          path: "/collection"
        },
        {
          id: 2,
          text: "关于我",
          path: "/myself"
        },
        {
          id: 3,
          text: "本站的制作",
          path: "/work"
        }
      ],
      curIndex: 0
    };
  },
  methods: {
    mouseOn(index) {
      this.curIndex = index;
    },
    tabClick(path) {
      this.$router.push(path);
    },
    jumpToHome(){
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.el-row {
  background-color: #2b2c30;
}
.nav-bar-bg {
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 5px;

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
