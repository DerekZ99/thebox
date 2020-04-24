<template>
  <div>
    <div class="collection animated bounceInUp">
      <div class="content">
        <home-nav-bar v-if="$store.state.isShowFooter"></home-nav-bar>
        <el-row class="row">
          <el-col :span="20" :offset="2">
            <p class="intro">
              Hi!欢迎来到我的收藏页面。我喜欢说唱音乐，下面有我喜欢的图片与音乐。你可以在听歌的同时来浏览下方的图片。点击图片可以放大他们哦
              Enjoy it :)
            </p>
            <Music class="music"></Music>
            <collection-list :imgSrc="imgSrc" ref="collectionList"></collection-list>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="mask animated fadeIn faster" v-show="isShowMask" @click.stop="hiddenMask">
      <img v-lazy="imgSrc[clickIndex]" alt />
    </div>
  </div>
</template>

<script>
import HomeNavBar from "../home/childComps/HomeNavBar";
import Music from "./childComps/Music";
import CollectionList from "components/content/collection/CollectionList";
export default {
  components: {
    HomeNavBar,
    Music,
    CollectionList
  },
  data() {
    return {
      clickIndex: "",
      imgSrc: [
        require("../../assets/rapImg/1.jpg"),
        require("../../assets/rapImg/2.jpg"),
        require("../../assets/rapImg/3.jpg"),
        require("../../assets/rapImg/4.jpg"),
        require("../../assets/rapImg/5.jpg"),
        require("../../assets/rapImg/6.jpg"),
        require("../../assets/rapImg/7.jpg"),
        require("../../assets/rapImg/8.jpg"),
        require("../../assets/rapImg/9.jpg"),
        require("../../assets/rapImg/10.jpg"),
        require("../../assets/rapImg/12.jpg"),
        require("../../assets/rapImg/13.jpg"),
        require("../../assets/rapImg/14.jpg"),
        require("../../assets/rapImg/box.jpg"),
        require("../../assets/rapImg/robby.jpg")
      ],
      isShowMask: false
    };
  },
  mounted() {
    // 这个事件由组件CollectionItem发出
    this.$bus.$on("itemClicked", imgIndex => {
      this.clickIndex = imgIndex;
      this.isShowMask = !this.isShowMask;
    });
  },
  methods: {
    hiddenMask() {
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
    this.toTop()
  }
};
</script>

<style scoped>
.collection {
  background: url("~assets/boxImg/otherBg.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  margin-bottom: 9vh;
}
.content {
  background: rgba(0, 0, 0, 0.5);
  padding-bottom: 1.25rem;
}

.intro {
  margin: 20px 0;
  font-size: 14px;
  color: #ffffff;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 90;
}
.mask img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 479px) {
  .mask img {
    width: 90%;
  }
  .collection{
     margin-bottom: 7vh;
  }
}
</style>
