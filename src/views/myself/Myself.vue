<template>
  <div>
    <div class="myself animated bounceInUp">
      <home-nav-bar v-if="$store.state.isShowFooter">
        <music-switch></music-switch>
      </home-nav-bar>
      <el-row class="row">
        <el-col :span="$store.state.isShowFooter ?16:20 " :offset="$store.state.isShowFooter ?4:2 ">
          <p class="intro">Hi,我们又见面了，那接下来我就来介绍一下我自己。</p>
          <Canada @imgClicked="imgClick"></Canada>
          <Skill></Skill>
        </el-col>
      </el-row>
    </div>
    <div v-show="isShowMask" @click="showMask" class="mask">
      <img class="maskImg" :src="imgItem.img" :title="imgItem.title" />
    </div>
  </div>
</template>

<script>
import HomeNavBar from "../home/childComps/HomeNavBar";
import Canada from "./childComps/Canada";
import Skill from "./childComps/Skill";
import MusicSwitch from "components/content/musicSwitch/MusicSwitch";

export default {
  components: {
    HomeNavBar,
    Canada,
    Skill,
    MusicSwitch
  },
  data() {
    return {
      imgItem: "",
      isShowMask: false
    };
  },
  methods: {
    imgClick(item) {
      this.imgItem = item;
      this.isShowMask = !this.isShowMask;
    },
    showMask() {
      this.isShowMask = !this.isShowMask;
    },
    getCurPath(path) {
      this.$store.commit("changeCurPath", path);
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  },
  activated() {
    const path = this.$route.path;
    this.getCurPath(path);
    this.toTop();
  }
};
</script>

<style scoped>
.myself {
  margin-bottom: 9vh;
  background: url("~assets/boxImg/otherBg.jpg") no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: auto;
}
.row {
  background: rgba(0, 0, 0, 0.5);
}
.intro {
  margin: 20px 0;
  color: aliceblue;
  font-size: 0.875rem;
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
}
.maskImg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 479px) {
  .maskImg {
    width: 90%;
  }
  .myself {
    margin-bottom: 6vh;
  }
}
@media screen and (min-width: 480px) {
  @media screen and (max-width: 768px) {
    .maskImg {
      height: 80vh;
    }
  }
}

@media screen and (min-width: 769px) {
  .maskImg {
    height: 80vh;
  }
}
</style>