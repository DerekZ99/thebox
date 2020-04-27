<template>
  <div class="canada">
    <p>我在我17岁,也就是2013年左右去了加拿大读书，在那呆了六年的时间。</p>
    <p>虽然在College修的不是计算机专业，但是期间接触了编程，这使我对编程产生了极大的兴趣。回国后，就决定要钻研前端，做一名优秀的程序员。</p>
    <p>在学习前端的历程中有遇到过不少的问题。当遇到bug的时候，我会先看报错信息，看看是哪里出了问题。然后再检查自己的代码是否有拼写错误。之后，再着重分析报错原因和思考解决方案。</p>
    <p>在制作这个博客的过程中，我也收获了许多。我把它分享给我的朋友，让他们作为用户给我提出一些改进的意见。我会针对每一条意见作出相应的改进，完善和添加一些功能。比如添加点击图片放大功能，对图片加载过慢做一些优化，又或者是布局和背景图片方面的问题。</p>
    <p>因此，我变得更加严谨，我会坚持贯彻这种严谨的态度，写出更好的代码</p>
    <el-collapse
      v-if="$store.state.isShowFooter"
      class="collapse"
      v-model="activeNames"
      @change="handleChange"
    >
      <el-collapse-item title="这里有在加拿大拍的照片，点击下方图片可以放大。点击此处可以隐藏图片" name="1">
        <!-- 轮播图 -->
        <el-carousel v-show="isShowSwiper" :interval="8000">
          <el-carousel-item class="swiper" v-for="item in canadaImg" :key="item.id">
            <h3>{{ item.title }}</h3>
            <img v-lazy="item.img" class="image" alt @click="imgClick(item)" />
          </el-carousel-item>
        </el-carousel>
        <!-- 轮播图↑ -->
      </el-collapse-item>
    </el-collapse>

    <!-- 轮播图 -->
    <el-carousel v-else :interval="8000" arrow="always">
      <el-carousel-item class="swiper" v-for="item in canadaImg" :key="item.id">
        <h3>{{ item.title }}</h3>
        <img v-lazy="item.img" class="image" alt @click="imgClick(item)" />
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播图↑ -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      canadaImg: [
        {
          id: 1,
          img: require("../../../assets/canadaImg/1.jpg"),
          title: "这是我高中的课室，当时是万圣节，大家都在雕刻南瓜"
        },
        {
          id: 2,
          img: require("../../../assets/canadaImg/2.jpg"),
          title: "没错，这个灰色衣服小伙就是我了"
        },
        {
          id: 3,
          img: require("../../../assets/canadaImg/3.jpeg"),
          title: "这是在多伦多的Christmas Market,下面那位小蓝帽就是我了"
        },
        {
          id: 4,
          img: require("../../../assets/canadaImg/4.jpg"),
          title: "这是早上6点多顶着寒风在车站等车"
        },
        {
          id: 5,
          img: require("../../../assets/canadaImg/5.jpg"),
          title:
            "就是加拿大家喻户晓的Tim Hortons咖啡，这个叫iced cap。卖相不太好，但是是真的好喝"
        },
        {
          id: 6,
          img: require("../../../assets/canadaImg/6.jpg"),
          title: "这是college的时候班级聚会，左边那位是对我影响很大的英语老师"
        },
        {
          id: 7,
          img: require("../../../assets/canadaImg/7.jpg"),
          title: "这是在College上专业课的时候学习安装电箱，放心，没有电的"
        },
        {
          id: 8,
          img: require("../../../assets/canadaImg/8.jpg"),
          title: "这是我曾经打工打餐馆"
        },
        {
          id: 9,
          img: require("../../../assets/canadaImg/9.jpg"),
          title: "这是路人视角的多伦多市中心的街道"
        },
        {
          id: 10,
          img: require("../../../assets/canadaImg/10.jpg"),
          title: "这就是多伦多的冬季"
        },
        {
          id: 11,
          img: require("../../../assets/canadaImg/11.jpg"),
          title: "不止会下雪，结冰的时候更可以从家一路滑到医院"
        },
        {
          id: 12,
          img: require("../../../assets/canadaImg/12.jpg"),
          title: "当然，多伦多的夏天还是很舒服的"
        },
        {
          id: 13,
          img: require("../../../assets/canadaImg/13.jpg"),
          title: "这里是阿岗昆公园，风景还是很美的"
        }
      ],
      isShowSwiper: true
    };
  },
  methods: {
    handleChange(val) {
      this.isShowSwiper = !this.isShowSwiper;
    },
    imgClick(item) {
      this.$emit("imgClicked", item);
    }
  }
};
</script>

<style>
.canada {
  color: #ffffff;
  font-size: .875rem;
}
.canada p {
  line-height: 1.5625rem;
  margin: 20px 0;
}
.canada .el-collapse {
  border: 1px solid #252526;
}
.canada .el-collapse-item__header {
  height: 100%;
  padding-left: 10px;
  background-color: #ffd7a4;
  border: none;
}
.canada .swiper {
  background-color: #383838;
}
.canada .el-collapse-item__wrap {
  background-color: #2b2c30;
  border-bottom: 1px solid #2b2c30;
}
.canada .swiper h3 {
  text-align: center;
  color: #ffffff;
}
.image {
  height: 100%;
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}
.canada .el-carousel__button {
  width: 8px;
}
.canada .el-carousel__item--card {
  width: 80%;
}
@media screen and (max-width: 479px) {
  .image {
    margin-top: 0.625rem;
    height: 100%;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
  .canada .swiper h3 {
    text-align: center;
    color: #dcdc8b;
    font-size: 1rem;
    padding-top: 0.3125rem;
    font-family: navbar;
  }
}
</style>
