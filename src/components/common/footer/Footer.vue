<template>
  <div class="footer">
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="text-area">
          <span class="text">本站使用 Vue.js + Element UI 制作</span>

          <span class="logo-img">
            <a href="https://cloud.tencent.com/developer/doc/1270">
              <img v-lazy="`https://main.qcloudimg.com/raw/c1e4f4dbc9f8d54cbbdb94da8a38d6f9.svg`" alt />
            </a>
            <a href="https://cn.vuejs.org/">
              <img v-lazy="require('../../../assets/vue/vue.jpg')" alt />
            </a>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  color: #ffffff;
  height: 10vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #1e1e1e;

  box-sizing: border-box;
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
}
@media screen and (max-width: 479px) {
  .footer {
    font-size: 0.625rem;
  }
  .text::after {
    margin-left: 10px;
  }
  .logo-img {
    display: inline-block;
    position: relative;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (min-width: 480px) {
  @media screen and (max-width: 768px) {
    .footer {
      font-size: 1rem;
      padding: 20px 0;
    }
    .text::after {
      margin-left: 10px;
    }
    .logo-img {
      float: right;
    }
  }
}

@media screen and (min-width: 769px) {
  .footer {
    padding: 20px 0;
  }
  .text::after {
    margin-left: 30px;
  }
  .logo-img {
    float: right;
  }
}
</style>
