<template>
  <div class="musicSwitchBox">
    <span class="switchText">已{{isPlayMusic?'开启':'关闭'}}音乐</span>
    <el-switch
      class="musicSwitch"
      v-model="isPlayMusic"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayMusic: false
    };
  },
  watch: {
    isPlayMusic() {
      this.$bus.$emit("playMusic", this.isPlayMusic);
    }
  },
  mounted() {
    let that = this;
    this.$bus.$on("playMusic", val => {
      that.isPlayMusic = val;
    });
  }
};
</script>

<style scoped>
.musicSwitchBox {
  display: flex;
  align-items: center;
  color: #fff;
}
.switchText {
  margin-right: 5px;
}
@media screen and (max-width: 479px) {
 .switchText {
  font-size: .75rem;
}
}

</style>