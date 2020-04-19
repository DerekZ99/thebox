<template>
  <div class="footer">
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="text-area">
          <span class="text">本站使用 Vue.js + Element UI 制作</span>

          <span class="logo-img">
            <a href="https://cloud.tencent.com/developer/doc/1270">
              <img src="https://main.qcloudimg.com/raw/c1e4f4dbc9f8d54cbbdb94da8a38d6f9.svg" alt />
            </a>
            <a href="https://cn.vuejs.org/">
              <img src="~assets/vue/vue.jpg" alt />
            </a>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.footer {
  color: #ffffff;
  height: 10vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #1e1e1e;
  padding: 20px 0;
  box-sizing: border-box;
}
.logo-img {
  float: right;
}
img {
  margin: 0 10px;
  height: 35px;
}
.text {
  line-height: 35px;
}
.text::after {
  content: "作者：Derek";
  margin-left: 30px;
}
</style>