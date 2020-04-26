<template>
  <div class="work" ref="work">
    <div class="content" :class="{ fixHeight: isFixHeight }">
      <home-nav-bar v-if="$store.state.isShowFooter">
        <music-switch></music-switch>
      </home-nav-bar>
      <el-row class="row">
        <el-col
          :span="$store.state.isShowFooter ? 16 : 20"
          :offset="$store.state.isShowFooter ? 4 : 2"
        >
          <p class="intro">Hi!欢迎你来到技术分享区。我将会在这里分享一些自己在制作网页时用到的一些技术与技巧</p>
          <p class="intro">
            这个网站是利用Vue + element
            UI搭建完成的。这里大量的使用了Animated.css动画插件。接下来，我会利用折叠面板的方式把内容呈现在里面，虽然这样对与阅读的连贯性不太好，但是整体看上去会比较干净。如果你下次再想来查看一些内容时，寻找起来比较方便。
          </p>
          <!-- 折叠板 -->
          <work-folder @getOffset="getOffsetTop" @folderClose="fixHeight"></work-folder>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HomeNavBar from "../home/childComps/HomeNavBar";
import WorkFolder from "./childComps/WorkFolder";
import MusicSwitch from "components/content/musicSwitch/MusicSwitch";

export default {
  components: {
    HomeNavBar,
    WorkFolder,
    MusicSwitch
  },
  data() {
    return {
      isFixHeight: true
    };
  },
  methods: {
    fixHeight(num) {
      if (!num) {
        this.isFixHeight = true;
      } else {
        this.isFixHeight = false;
      }
    },
    getCurPath(path) {
      this.$store.commit("changeCurPath", path);
    },
    getOffsetTop(val) {
      this.$refs.work.scrollTop = val;
    }
  },
  activated() {
    const path = this.$route.path;
    this.getCurPath(path);
  }
};
</script>

<style scoped>
.work {
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  background-size: cover;
  height: 90vh;
}

.intro {
  margin: 20px 0;
  font-size: 14px;
  color: #ffffff;
  line-height: 1.5625rem;
}
.fixHeight {
  height: 100%;
}
</style>
