<template>
  <div class="myself animated bounceInUp">
    <home-nav-bar></home-nav-bar>
    <el-row>
      <el-col :span="16" :offset="4">
        <p class="intro">Hi,我们又见面了，那接下来我就来介绍一下我自己。</p>
        <Canada></Canada>
        <Skill></Skill>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeNavBar from "../home/childComps/HomeNavBar";
import Canada from "./childComps/Canada"
import Skill from "./childComps/Skill"

export default {
  components: {
    HomeNavBar,
    Canada,
    Skill
  }
};
</script>

<style scoped>
.myself {
  height: 90vh;
  overflow: auto;
}
.intro{
  margin: 20px 0;
  color: aliceblue;
  font-size: 14px;
}

</style>