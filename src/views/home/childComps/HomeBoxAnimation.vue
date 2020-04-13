<template>
  <div>
    <el-row>
      <el-col class="animation-area" ref="col" :span="16" :offset="4">
        <p class="intro">Hi!欢迎来到我的博客，The Box。</p>
        <p
          class="intro"
        >在这里，你将会看到这个页面的制作过程，关于我的点点滴滴，以及我收藏的一些好看的图片，希望你会喜欢上这个网站。So,let's enjoy the party!</p>
        <p class="intro">对了，我还要在这里致敬一下我男神，Vue.js的作者——尤雨溪（Evan You）</p>
        <img class="evan-img" src="~assets/vue/evan.jpg" alt />
      </el-col>
    </el-row>
    <div class="canvasDiv" ref="canvasDiv">
      <canvas id="myCanvas" ref="canvas" @click="boxClick"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winH: document.documentElement.clientHeight,
      winW: document.documentElement.clientWidth,
      canvas: "",
      ctx: "",
      cH: 0,
      cW: 0,
      col: "",
      particle: {
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        radius: 0,
        color: ""
      }
    };
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      this._initCanvas();
    });

    // window.addEventListener("resize", function() {
    //   that.cH = that.$refs.canvasDiv.clientHeight;
    //   that.cW = that.$refs.canvasDiv.clientWidth;
    //   that._initCanvas();
    // });
  },
  methods: {
    _initCanvas() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.cW = this.canvas.width = this.$refs.canvasDiv.clientWidth * 0.9;
      this.cH = this.canvas.height = this.$refs.canvasDiv.clientHeight * 0.9;

      this.draw();
    },

    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
      this.ctx.fillStyle = "#F5CD39";
      this.ctx.fillRect(this.cW / 2 - 25, this.cH - 50, 50, 50);
    },
    boxClick() {
      console.log(this.$refs.canvasDiv.clientWidth);
      console.log(this.$refs.canvasDiv);

      // this._initCanvas();
    }
  }
};
</script>

<style scoped>
.animation-area {
  height: 100%;
}
.intro {
  color: #ffffff;
  padding-top: 20px;
  font-size: 14px;
}
#myCanvas {
  margin-top: 20px;
  border: 1px solid red;
  flex: 1;
}
.canvasDiv {
  width: 100%;
  display: flex;
  height: 100%;
}
.evan-img {
  display: block;
  width: 20%;
  margin: 20px auto;
}
</style>