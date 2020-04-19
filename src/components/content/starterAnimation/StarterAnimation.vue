<template>
  <div class="starter">
    <img class="animated fadeIn slower" src="~assets/rapImg/robby.jpg" alt />
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
  methods:{
    BtnClick(){
      this.$emit('BtnClicked')
    }
  }
};
</script>

<style scoped>
.starter {
  height: 90vh;
}
.starter img {
  position: absolute;
  width: 100%;
  height: 90%;
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
  border: 1px solid #FFFFFF;
  color: #fff;
  font-size: 20px;
  font-family: navbar;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
}
.clickBtn:hover{
  cursor: pointer;
}
.clickBtn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  height: 57px;
  width: 145px;
  border: 1px solid #FFFFFF;
  transform: translate(-50%, -50%);
}
</style>