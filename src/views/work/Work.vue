<template>
  <div class="work">
    <div class="content" :class="{fixHeight:isFixHeight}">
      <home-nav-bar>
        <music-switch></music-switch>
      </home-nav-bar>
      <el-row class="row">
        <el-col :span="16" :offset="4">
          <p class="intro">
            Hi!欢迎你来到本站的制作。我将会在这里分享一些自己在制作这个网站时遇到的坑，以及一些小技巧。虽然说基本上都是基础操作。但是这也算是我成长的印记。当然，我也十分希望可以得到你宝贵的意见。
            :)
          </p>
          <p class="intro">
            这个网站是利用Vue + element
            UI开发的。是我独立制作的第一个完整的网页。意义上来说，也是一个我拿来练手的网站。硬着头皮把自己想的需求给写出来了，当然有很多还是没有实现的。But
            Anyway,
            对自己还是满意的。这里还大量的用了Animated.css这个神奇的插件。Ok，接下来，我会利用折叠面板的方式把内容呈现在里面，虽然这样对与阅读的连贯性不太好，但是整体看上去会比较干净。如果你下次再想来查看一些内容时，寻找起来比较方便
          </p>
          <!-- 折叠板 -->
          <work-folder @folderClose="fixHeight"></work-folder>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HomeNavBar from "../home/childComps/HomeNavBar";
import WorkFolder from "./childComps/WorkFolder";
import MusicSwitch from "components/content/musicSwitch/MusicSwitch" 

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
  background: url("~assets/boxImg/otherBg.jpg") no-repeat;

  background-size: cover;
  background-attachment: fixed;
  height: 90vh;
}
.content {
  background: rgba(0, 0, 0, 0.5);
  background-size: cover;
}
.intro {
  margin: 20px 0;
  font-size: 14px;
  color: #ffffff;
}
.fixHeight {
  height: 100%;
}
</style>
