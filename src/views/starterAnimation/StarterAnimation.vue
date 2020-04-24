<template>
  <div class="starter">
    <div class="title">
      <div class="main-title animated fadeIn slower delay-2s">
        the box
        <div class="second-title">see what's inside</div>
      </div>
      <div class="clickBtn animated fadeIn slower delay-3s" @click="BtnClick">点击进入</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    BtnClick() {
      this.$router.push("/home");
      this.$bus.$emit('enterClick') //发送点击事件给app.vue
    },
    getCurPath(path) {
      this.$store.commit("changeCurPath", path);
    }
  },
  mounted() {
    const path = this.$route.path;
    this.getCurPath(path);
  }
};
</script>

<style scoped>
.starter {
  height: 90vh;
  background: url("~assets/rapImg/robby.jpg") no-repeat;
  background-size: cover;
  background-position-x: 50%;
}
.title {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
}
.main-title {
  position: absolute;
  color: lightpink;
  font-size: 150px;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  font-family: best;
}
.second-title {
  position: absolute;
  color: #fff;
  font-size: 60px;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-family: best;
}
.clickBtn {
  position: absolute;
  padding: 10px 30px;
  border: 1px solid #ffffff;
  color: #fff;
  font-size: 20px;
  font-family: navbar;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
}
.clickBtn:hover {
  cursor: pointer;
}
.clickBtn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  height: 57px;
  width: 145px;
  border: 1px solid #ffffff;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 479px) {
  .main-title {
    font-size: 5.3125rem;
  }
  .second-title {
    font-size: 2.1875rem;
  }
}
</style>