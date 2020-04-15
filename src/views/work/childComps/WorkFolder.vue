<template>
  <el-collapse
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
  
</template>

<script>
import GeneralInfo from "./GeneralInfo";
import IntroAnimation from "./IntroAnimation";
import HeaderVideo from "./HeaderVideo";
import AnimatedCss from "./AnimatedCss"
import ElementUi from "./ElementUi"
export default {
  components: {
    GeneralInfo,
    IntroAnimation,
    HeaderVideo,
    AnimatedCss,
    ElementUi
  },
  data() {
    return {
      activeNames: ["0"]
    };
  },
  methods: {
    handleChange(val) {}
  }
};
</script>

<style scoped>
.folder {
  padding: 0 10px;
}
.closeBtn {
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

</style>
