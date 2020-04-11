<template>
  <div class="starter animated slideOutUp delay-5s">
    <img class="animated fadeIn slower" src="~assets/rapImg/robby.jpg" alt />
    <div class="title">
      <div class="main-title animated fadeIn slower delay-2s">
        the box
        <div class="second-title">see what's inside</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.starter {
  height: 100vh;
}
.starter img {
  position: absolute;
  width: 100%;
  height: 100%;
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
</style>