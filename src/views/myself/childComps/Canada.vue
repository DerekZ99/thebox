<template>
  <div class="canada">
    <p>我在我17岁那年，也就是2013年左右去了加拿大读书，在那呆了六年的时间。</p>
    <p>
      我在一个叫belleville的小镇子读完了高中，完整的体验了三年的乡村生活。高中毕业之后，来到多伦多这个大城市开始了我的College生涯
    </p>
    <p>出国留学收获了什么？其实留学生挺苦的,用一句话概括那就是磨炼了自己。</p>
    <el-collapse class="collapse" v-model="activeNames" @change="handleChange">
      <el-collapse-item title="点击这里有我在加拿大拍的照片" name="1">
        <!-- 轮播图 -->
        <el-carousel v-if="isShowSwiper" :interval="5000">
          <el-carousel-item
            class="swiper"
            v-for="item in canadaImg"
            :key="item.id"
          >
            <h3>{{ item.title }}</h3>
            <img :src="item.img" class="image" alt />
          </el-carousel-item>
        </el-carousel>
      </el-collapse-item>
    </el-collapse>
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
    }
  }
};
</script>

<style>
.canada {
  color: #ffffff;
  font-size: 14px;
}
.canada p {
  margin: 20px 0;
}
.canada .el-collapse {
  border: 1px solid #252526;
}
.canada .el-collapse-item__header {
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
</style>
