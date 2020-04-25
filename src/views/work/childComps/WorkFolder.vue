<template>
  <div class="workFolder">
    <el-collapse
      ref="collapse"
      v-model="activeNames"
      @change="handleChange"
      accordion
    >
      <!-- generalInfo内容 -->
      <el-collapse-item title="开始工作" name="1">
        <div class="folder">
          <general-info></general-info>
        </div>
      </el-collapse-item>
      <!-- IntroAnimation内容 -->
      <el-collapse-item title="开场动画" name="2">
        <div class="folder">
          <intro-animation></intro-animation>
        </div>
      </el-collapse-item>
      <!-- HeaderVideo内容 -->
      <el-collapse-item title="Header视频" name="3">
        <div class="folder">
          <header-video></header-video>
        </div>
      </el-collapse-item>
      <!-- AnimatedCss内容 -->
      <el-collapse-item title="Animated.Css特效" name="4">
        <div class="folder">
          <animated-css></animated-css>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Element Ui库" name="5">
        <div class="folder">
          <element-ui></element-ui>
        </div>
      </el-collapse-item>
    </el-collapse>
    <work-list
      v-if="$store.state.isShowFooter"
      v-show="activeNames"
      :class="activeNames ? 'animated bounceIn' : ''"
      @listItemClick="listItemClicked"
      :title="item"
    ></work-list>
  </div>
</template>

<script>
// 引入详细内容
import GeneralInfo from "./GeneralInfo";
import IntroAnimation from "./IntroAnimation";
import HeaderVideo from "./HeaderVideo";
import AnimatedCss from "./AnimatedCss";
import ElementUi from "./ElementUi";
// 引入目录
import WorkList from "./WorkList";
export default {
  components: {
    GeneralInfo,
    IntroAnimation,
    HeaderVideo,
    AnimatedCss,
    ElementUi,
    WorkList,
  },
  data() {
    return {
      activeNames: "",
      item: null,
      itemOffsetTop: 0,
    };
  },
  mounted() {
    this.item = this.$refs.collapse.$children;
  },
  methods: {
    handleChange(val) {
      const activeNum = this.activeNames;
      this.$emit("folderClose", activeNum);
      if (!val) return; //防止报错
      setTimeout(() => { //页面滚动到标题位置
        this.$emit("getOffset", this.item[val - 1].$el.offsetTop);
      },400);
    },
    listItemClicked(activeNum) {
      this.activeNames = activeNum;
      setTimeout(() => { //页面滚动到标题位置
        this.$emit("getOffset", this.item[activeNum-1].$el.offsetTop);
      },400);
      
    },
  },
};
</script>

<style>
.folder {
  padding: 0 10px;
}
.workFolder .el-collapse-item__header {
  background-color: #cddbf1;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
}
.workFolder .el-collapse-item__wrap {
  background-color: #fff7dd;
}
.workFolder {
  margin-bottom: 7vh;
}
</style>
